// import { prisma } from "@/lib/prisma";

// export async function GET() {
//   try {
//     const test = await prisma.$queryRaw`SELECT 1`;
//     return Response.json({ success: true, test });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Database failed" }, { status: 500 });
//   }
// }

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrisma();
    const journals = await prisma.journalEntry.findMany();

    return Response.json({ success: true, journals });
  } catch (error) {
    console.error("DB ERROR:", error);
    return Response.json({ error: "Database failed" }, { status: 500 });
  }
}


