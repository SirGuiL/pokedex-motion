import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFilterStore } from "@/stores/usePokedexFilters";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function OrderByMenu() {
  const { order, setOrder } = useFilterStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent min-w-40 justify-start font-bold h-auto"
        >
          <span className="text-base">
            {order === "asc" ? "Ascending" : "Descending"}
          </span>

          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
          >
            <ChevronDown className="min-h-5 max-h-5 min-w-5 max-w-5" />
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setOrder("asc")}>
            Ascending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOrder("desc")}>
            Descending
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
