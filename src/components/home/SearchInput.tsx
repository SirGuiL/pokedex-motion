import { useSearchStore } from "@/stores/useSearchStore";
import { PokeballIcon } from "../icons/PokeballIcon";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const { setSearch } = useSearchStore();

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(inputValue);
      }}
    >
      <InputGroup className="bg-white h-14 rounded-2xl">
        <InputGroupInput
          placeholder="Ex: Pikachu"
          className="h-14 px-5"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <InputGroupAddon align="inline-end" className="pr-5">
          <Button
            className="bg-red-300 p-2! flex items-center justify-center cursor-pointer hover:bg-red-300 rounded-lg"
            type="submit"
          >
            <PokeballIcon className="fill-white min-w-6 max-w-6 min-h-6 max-h-6 flex items-center justify-center" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};
