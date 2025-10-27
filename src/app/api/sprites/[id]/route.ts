import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = context;
  const { id } = await params;
  const cached = await redis.get(`sprite:${id}`);
  if (cached) {
    return new NextResponse(cached as string, {
      headers: { "Content-Type": "image/png" },
    });
  }

  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const buffer = await res.arrayBuffer();
  await redis.set(`sprite:${id}`, Buffer.from(buffer).toString("base64"), {
    ex: 60 * 60 * 24 * 31,
  }); // 1 month

  return new NextResponse(buffer, { headers: { "Content-Type": "image/png" } });
}
