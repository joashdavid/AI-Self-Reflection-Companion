import { prisma } from "@/lib/prisma";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// 🔐 Get Supabase user
async function getSupabase() {
  const cookieStore = await cookies();

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

    const journals = await prisma.journalEntry.findMany({
      where: {
        userId: user.id, // ✅ FIXED
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        analysis: true,
      },
    });

    return NextResponse.json({ journals });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    );
  }
}