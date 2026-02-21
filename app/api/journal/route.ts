import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const test = await prisma.$queryRaw`SELECT 1`;
    return Response.json({ success: true, test });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Database failed" }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, intensity, mood } = body;

    if (!content || content.length < 20) {
      return NextResponse.json(
        { error: "Journal entry too short" },
        { status: 400 }
      );
    }
    const entry = await prisma.journalEntry.create({
      data: {
        content,
        intensity,
        mood, // user-selected emotion
      },
    });

    return NextResponse.json({ success: true, entry });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save journal" },
      { status: 500 }
    );
  }
}

// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

// import { getPrisma } from "@/lib/prisma";

// export async function GET() {
//   try {
//     const prisma = getPrisma();
//     const journals = await prisma.journalEntry.findMany();

//     return Response.json({ success: true, journals });
//   } catch (error) {
//     console.error("DB ERROR:", error);
//     return Response.json({ error: "Database failed" }, { status: 500 });
//   }
// }