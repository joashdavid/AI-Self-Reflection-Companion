import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const runtime = "nodejs";

// ✅ FIXED: async function
async function getSupabase() {
  const cookieStore = await cookies(); // ✅ FIX

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
      },
    }
  );
}

// GET (DB test)
// export async function GET() {
//   try {
//     const test = await prisma.$queryRaw`SELECT 1`;
//     return Response.json({ success: true, test });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Database failed" }, { status: 500 });
//   }
// }

export async function GET() {
  try {
    const supabase = await getSupabase();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 🔥 Find DB user
    const dbUser = await prisma.user.findUnique({
      where: { email: user.email! },
    });

    if (!dbUser) {
      return NextResponse.json({ journals: [] });
    }

    // ✅ Fetch journals
    const journals = await prisma.journalEntry.findMany({
      where: {
        userId: dbUser.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        analysis: true, // future ready
      },
    });

    return NextResponse.json({ journals });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}

// POST (Save journal securely)
export async function POST(req: Request) {
  try {
    const supabase = await getSupabase();

    const { content, mood, intensity } = await req.json();

    // 🔐 Get logged-in user
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    console.log("USER:", user);

    if (!user || error) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!content || content.length < 20) {
      return NextResponse.json(
        { error: "Journal entry too short" },
        { status: 400 }
      );
    }

    // ✅ Save journal (USE SUPABASE USER ID)
    const entry = await prisma.journalEntry.create({
      data: {
        content,
        intensity,
        mood,
        userId: user.id, // 🔥 FIXED
      },
    });

    return NextResponse.json({ success: true, entry });

  } catch (error) {
    console.error("FULL ERROR:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}