import { useFilterStore } from "@/stores/usePokedexFilters";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RotateCcw } from "lucide-react";
import { AbilityCombobox } from "./AbilityCombobox";

export const Filters = () => {
  const { clearFilters, type, setType, weakness, setWeakness } =
    useFilterStore();

  return (
    <div className="flex items-center gap-2">
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="flex-1 bg-white">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="fire">Fire</SelectItem>
            <SelectItem value="water">Water</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="grass">Grass</SelectItem>
            <SelectItem value="ice">Ice</SelectItem>
            <SelectItem value="fighting">Fighting</SelectItem>
            <SelectItem value="poison">Poison</SelectItem>
            <SelectItem value="ground">Ground</SelectItem>
            <SelectItem value="flying">Flying</SelectItem>
            <SelectItem value="psychic">Psychic</SelectItem>
            <SelectItem value="bug">Bug</SelectItem>
            <SelectItem value="rock">Rock</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="dragon">Dragon</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="steel">Steel</SelectItem>
            <SelectItem value="fairy">Fairy</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={weakness} onValueChange={setWeakness}>
        <SelectTrigger className="flex-1 bg-white">
          <SelectValue placeholder="Weakness" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="fire">Fire</SelectItem>
            <SelectItem value="water">Water</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="grass">Grass</SelectItem>
            <SelectItem value="ice">Ice</SelectItem>
            <SelectItem value="fighting">Fighting</SelectItem>
            <SelectItem value="poison">Poison</SelectItem>
            <SelectItem value="ground">Ground</SelectItem>
            <SelectItem value="flying">Flying</SelectItem>
            <SelectItem value="psychic">Psychic</SelectItem>
            <SelectItem value="bug">Bug</SelectItem>
            <SelectItem value="rock">Rock</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="dragon">Dragon</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="steel">Steel</SelectItem>
            <SelectItem value="fairy">Fairy</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <AbilityCombobox />

      <Select>
        <SelectTrigger className="flex-1 bg-white">
          <SelectValue placeholder="Height" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="flex-1 bg-white">
          <SelectValue placeholder="Weight" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        className="p-3! bg-gray-400 hover:bg-gray-400 cursor-pointer"
        onClick={() => clearFilters()}
      >
        <RotateCcw className="min-w-5 max-w-5 min-h-5 max-h-5 text-gray-800" />
      </Button>
    </div>
  );
};
