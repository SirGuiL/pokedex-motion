import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

interface fetchMovesResponse {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "";

  const cacheKey = "moves:all";

  const cached = (await redis.get(cacheKey)) as fetchMovesResponse;
  if (cached) {
    const filtered = cached.results.filter((move: { name: string }) =>
      move.name.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json({
      results: filtered,
      metadata: {
        count: filtered.length,
      },
    });
  }

  const res = await fetch(`${BASE_URL}/ability?offset=0&limit=400`);
  const data = await res.json();

  await redis.set(cacheKey, data, { ex: 60 * 60 * 24 * 31 }); // 1 month

  const filtered = data.results.filter((move: { name: string }) =>
    move.name.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json({
    results: filtered,
    metadata: {
      count: filtered.length,
    },
  });
}
