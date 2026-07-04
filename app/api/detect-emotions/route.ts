import { NextRequest, NextResponse } from "next/server";
import lexicon from "@/lib/nrc_lexicon.json";

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    const strongEmotionWords = [
      "happy", "sad", "angry", "anxious", "calm", "confused",
      "motivated", "lonely", "overwhelmed", "insecure"
    ];

    const emotionScores: Record<string, number> = {};

    // words.forEach((word) => {
    //   const emotions = (lexicon as Record<string, string[]>)[word];

    //   if (emotions) {
    //     emotions.forEach((emotion) => {
    //       emotionScores[emotion] = (emotionScores[emotion] || 0) + 1;
    //     });
    //   }
    // });
    words.forEach((word) => {
      const emotions = (lexicon as Record<string, string[]>)[word];

      if (emotions) {
        emotions.forEach((emotion) => {
          emotionScores[emotion] = (emotionScores[emotion] || 0) + 1;
        });
      }

      // 🔥 BOOST direct emotion words
      if (strongEmotionWords.includes(word)) {
        const mapped = mapToUIEmotion(
          word === "sad" ? "sadness" :
            word === "happy" ? "joy" :
              word === "angry" ? "anger" :
                word === "anxious" ? "fear" :
                  word === "calm" ? "trust" :
                    word === "confused" ? "surprise" :
                      word === "motivated" ? "anticipation" :
                        word === "lonely" ? "sadness" :
                          word === "overwhelmed" ? "fear" :
                            word === "insecure" ? "fear" :
                              ""
        );

        if (mapped) {
          mappedScores[mapped] = (mappedScores[mapped] || 0) + 3; // 🔥 BIG BOOST
        }
      }
    });

    const mapToUIEmotion = (emotion: string): string | null => {
      const mapping: Record<string, string> = {
        anger: "Angry",
        fear: "Anxious",
        sadness: "Sad",
        joy: "Happy",
        trust: "Calm",
        anticipation: "Motivated",
        surprise: "Confused",
        disgust: "Angry",
      };

      return mapping[emotion] ?? null;
    };

    // ✅ Merge mapped emotions
    const mappedScores: Record<string, number> = {};

    Object.entries(emotionScores).forEach(([emotion, score]) => {
      const label = mapToUIEmotion(emotion);

      if (!label) return;

      mappedScores[label] = (mappedScores[label] || 0) + score;
    });
    const explicitEmotions: string[] = [];

    const text = content.toLowerCase();
    if (content.toLowerCase().includes("sad")) {
      if (!mappedScores["Sad"]) {
        mappedScores["Sad"] = 1;
      }
    }
    if (text.includes("happy")) explicitEmotions.push("Happy");
    if (text.includes("anxious")) explicitEmotions.push("Anxious");
    if (text.includes("sad")) explicitEmotions.push("Sad");

    
    const totalScore = Object.values(mappedScores).reduce((a, b) => a + b, 0);
    const topEmotions = Object.entries(mappedScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([label, score]) => ({
        label,
        confidence: score / totalScore,
      }));

    return NextResponse.json({
      emotions: topEmotions,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to detect emotions" },
      { status: 500 }
    );
  }
}