import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const test = await prisma.$queryRaw`SELECT 1`;
    return Response.json({ success: true, test });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Database failed" }, { status: 500 });
  }
}
