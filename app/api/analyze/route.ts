import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
export async function POST(req: NextRequest) {
  if (!process.env.GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY");

    return NextResponse.json({
      tone: "AI not configured properly.",
      patterns: ["Missing API key"],
      insight: "Please check server configuration."
    });
  }
  try {
    const { content, emotions } = await req.json();
    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    // const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `
You are a calm, emotionally intelligent reflection assistant.

Your role is to gently mirror the user’s inner state — not analyze them like a report.

Return JSON only.

STYLE RULES (VERY IMPORTANT):
- Use simple, natural, human language
- Keep tone warm, grounded, and relatable
- Avoid academic, clinical, or poetic-heavy phrasing
- Do NOT use phrases like:
  "internal conflict emerges"
  "deep-seated patterns"
  "psychological mechanisms"
- Write like a thoughtful human reflecting back feelings
- It should feel like: “this understands me”

TASK:

1. Emotional tone (1–2 short sentences)
   - Describe what the user is feeling in simple terms
   - Acknowledge mixed emotions if present

2. Inner patterns (2 bullet points)
   - Keep them short and clear
   - Focus on fear, ego, attachment, comparison, or control

3. Gentle insight (1–2 sentences)
   - Reflect what might be happening internally
   - Do NOT give advice
   - Do NOT tell the user what to do
   - Just help them see something more clearly

Journal:
"""${content}"""

Detected emotions:
${JSON.stringify(emotions || [])}

Return format:
{
  "tone": "...",
  "patterns": ["...", "..."],
  "insight": "..."
}
`;

    let text = "";

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      text = response.text();

      console.log("Gemini raw:", text); // debug
    } catch (err) {
      console.error("Gemini failed:", err);

      return NextResponse.json({
        tone: "I couldn’t analyze your thoughts right now.",
        patterns: ["Something interrupted the analysis"],
        insight: "Try again in a moment."
      });
    }

    // 🔥 Extract JSON safely
    let parsed;

    try {
      const cleanText = text.replace(/```json|```/g, "").trim();
      parsed = JSON.parse(cleanText);
    } catch (err) {
      console.error("JSON parse failed:", text);

      parsed = {
    tone: "You're experiencing a mix of emotions.",
    patterns: ["There may be internal conflict"],
    insight: "Your mind is trying to process multiple feelings."
  };
    }

    return NextResponse.json(parsed);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze journal" },
      { status: 500 }
    );
  }
}