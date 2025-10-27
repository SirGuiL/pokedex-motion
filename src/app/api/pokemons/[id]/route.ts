import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { params } = context;

  const { id } = await params;

  const cacheKey = `pokemons:${id}`;

  const cached = await redis.get(cacheKey);

  if (cached) {
    return NextResponse.json(cached);
  }

  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await res.json();

  await redis.set(cacheKey, data, { ex: 60 * 60 * 24 * 31 }); // 1 month

  return NextResponse.json(data);
}
