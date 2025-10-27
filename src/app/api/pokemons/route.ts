import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

interface fetchPokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "";
  const offset = searchParams.get("offset") ?? 0;
  const limit = searchParams.get("limit") ?? 10;

  const cacheKey = "pokemons:all";

  const cached = (await redis.get(cacheKey)) as fetchPokemonsResponse;
  if (cached) {
    const filtered = cached.results.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    const paginatedData = filtered.slice(
      Number(offset),
      Number(offset) + Number(limit)
    );

    return NextResponse.json({
      results: paginatedData,
      metadata: {
        count: filtered.length,
        offset: Number(offset),
        limit: Number(limit),
      },
    });
  }

  const res = await fetch(`${BASE_URL}/pokemon?limit=10000`);
  const data = await res.json();

  await redis.set(cacheKey, data, { ex: 60 * 60 * 24 * 31 }); // 1 month

  const filtered = data.results.filter((pokemon: { name: string }) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  const paginatedData = filtered.slice(
    Number(offset),
    Number(offset) + Number(limit)
  );

  return NextResponse.json({
    results: paginatedData,
    metadata: {
      count: filtered.length,
      offset: Number(offset),
      limit: Number(limit),
    },
  });
}
