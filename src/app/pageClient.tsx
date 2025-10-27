"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Cards } from "@/components/home/list/Cards";
import { SearchInput } from "@/components/home/SearchInput";
import { SelectedPokemon } from "@/components/home/SelectedPokemon";
import { ListPagination } from "@/components/home/list/Pagination";
import { OrderByMenu } from "@/components/home/list/OrderByMenu";
import { OffsetFilter } from "@/components/home/list/OffsetFilter";
import { Filters } from "@/components/home/list/Filters";

const queryClient = new QueryClient();

export const PageClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchInput />

      <div className="flex w-full">
        <div className="flex flex-col w-full gap-20">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <OrderByMenu />

                <OffsetFilter />
              </div>

              <Filters />
            </div>

            <Cards />
          </div>
        </div>

        <SelectedPokemon />
      </div>

      <ListPagination />
    </QueryClientProvider>
  );
};
