import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePaginationStore } from "@/stores/usePaginationStore";

export function ListPagination() {
  const { pagination, setPagination, maxPages } = usePaginationStore();

  return (
    <Pagination className="justify-end">
      <PaginationContent>
        <PaginationItem
          className={cn(
            "cursor-pointer",
            pagination === 1 ? "cursor-not-allowed hover:bg-transparent" : ""
          )}
          onClick={() => pagination > 1 && setPagination(pagination - 1)}
        >
          <PaginationPrevious
            className={pagination === 1 ? "hover:bg-transparent" : ""}
          />
        </PaginationItem>
        {pagination > 1 && (
          <PaginationItem
            onClick={() => setPagination(pagination - 1)}
            className="cursor-pointer"
          >
            <PaginationLink>{pagination - 1}</PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem className="cursor-pointer">
          <PaginationLink isActive>{pagination}</PaginationLink>
        </PaginationItem>

        {maxPages > pagination && (
          <PaginationItem
            onClick={() => setPagination(pagination + 1)}
            className="cursor-pointer"
          >
            <PaginationLink>{pagination + 1}</PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem
          className={cn(
            "cursor-pointer",
            maxPages === pagination
              ? "cursor-not-allowed hover:bg-transparent"
              : ""
          )}
          onClick={() => pagination < maxPages && setPagination(pagination + 1)}
        >
          <PaginationNext
            className={maxPages === pagination ? "hover:bg-transparent" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
