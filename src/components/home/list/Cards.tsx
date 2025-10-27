"use client";

import { PokemonService } from "@/services/Pokemons";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";
import { useSearchStore } from "@/stores/useSearchStore";
import { useCallback, useEffect } from "react";
import { usePaginationStore } from "@/stores/usePaginationStore";
import { Skeleton } from "@/components/ui/skeleton";

const fetchPokemons = async (query: string, offset: number, limit?: number) => {
  const pokemonService = new PokemonService();

  if (!limit) limit = 12;

  return await pokemonService.get({
    limit,
    offset,
    query,
  });
};

export const Cards = () => {
  const { search } = useSearchStore();
  const { setMaxPages, pagination } = usePaginationStore();

  const { isLoading, data, error, refetch, isFetching } = useQuery({
    queryKey: ["pokemons", search, pagination],
    queryFn: () => fetchPokemons(search, (pagination - 1) * 12, 12),
  });

  const handleRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    handleRefetch();
  }, [search, handleRefetch, pagination]);

  useEffect(() => {
    setMaxPages(Math.ceil((data?.metadata.count ?? 12) / 12));
  }, [data?.metadata.count, setMaxPages]);

  if (isLoading || isFetching) {
    return (
      <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-full">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton
            key={index}
            className="min-h-[130px] max-h-[130px] min-w-[384px] max-w-[384px]"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>error</div>
      </div>
    );
  }

  if (data?.results.length === 0) {
    return (
      <div>
        <div>no results</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-full">
      {data?.results.map((pokemon, index) => (
        <Card {...pokemon} key={index + (pagination - 1) * 12} />
      ))}
    </div>
  );
};
