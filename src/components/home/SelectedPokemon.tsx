import { useSelectedPokemonStore } from "@/stores/useSelectedPokemon";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export const SelectedPokemon = () => {
  const { selectedPokemon, setSelectedPokemon } = useSelectedPokemonStore();

  const frontSprites = Object.entries(selectedPokemon?.sprites ?? {})
    .filter(([key, value]) => key.startsWith("front_") && value)
    .map(([, value]) => value as string);

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={
        selectedPokemon
          ? { width: 500, scale: 1, opacity: 1, marginLeft: 40 }
          : { width: 0, opacity: 0 }
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="overflow-hidden flex flex-col bg-white rounded-2xl shadow-2xl h-full w-full max-w-300"
    >
      <div className="flex items-center justify-end p-4">
        <Button
          className="p-0! flex items-center justify-center hover:bg-white h-5 cursor-pointer"
          variant="ghost"
          onClick={() => setSelectedPokemon(null)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={
            frontSprites[0]
              ? frontSprites[0].replaceAll(
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
                  "/api/sprites"
                )
              : ""
          }
          alt={selectedPokemon?.name ?? ""}
          width={120}
          height={120}
          className="h-50 w-50 border-2 border-gray-200 rounded-md"
        />
      </div>
    </motion.div>
  );
};
