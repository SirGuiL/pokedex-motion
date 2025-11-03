import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { AbilityService } from "@/services/Moves";
import { useFilterStore } from "@/stores/usePokedexFilters";
import { useQuery } from "@tanstack/react-query";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const fetchAbilities = async () => {
  const moveService = new AbilityService();
  return await moveService.get();
};

export const AbilityCombobox = () => {
  const { isLoading, data, error, refetch, isFetching } = useQuery({
    queryKey: ["moves"],
    queryFn: fetchAbilities,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { ability, setAbility } = useFilterStore();

  const [open, setOpen] = useState(false);

  if (!data) return null;

  console.log(data);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between text-gray-800 hover:text-gray-800 hover:bg-white flex-1",
            !ability && "text-muted-foreground hover:text-muted-foreground"
          )}
          withoutAnimation
        >
          {ability
            ? data.results.find((move) => move.name === ability)?.name
            : "Select ability..."}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {data.results.map((move) => (
                <CommandItem
                  key={move.name}
                  value={move.name}
                  onSelect={(currentValue) => {
                    setAbility(currentValue === ability ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {move.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      ability === move.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
