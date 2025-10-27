import { Button } from "@/components/ui/button";
import {
  Croissant,
  Gamepad2,
  Home,
  IdCardLanyard,
  MapPin,
  Zap,
} from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex px-10 items-center gap-2 justify-between bg-white rounded-2xl py-4 max-w-300 w-full mx-auto shadow-2xl">
      <Button
        variant="ghost"
        className="text-gray-800 cursor-pointer p-0! text-lg hover:bg-transparent hover:text-gray-800 h-12"
      >
        <Home className="w-4.5! h-4.5!" />
        Pokédex
      </Button>

      <Button
        variant="ghost"
        className="text-gray-800 cursor-pointer p-0! text-lg hover:bg-transparent hover:text-gray-800 h-12"
      >
        <Zap className="w-4.5! h-4.5!" />
        Abilities
      </Button>

      <Button
        variant="ghost"
        className="text-gray-800 cursor-pointer p-0! text-lg hover:bg-transparent hover:text-gray-800 h-12"
      >
        <IdCardLanyard className="w-4.5! h-4.5!" />
        TCG
      </Button>

      <Button
        variant="ghost"
        className="text-gray-800 cursor-pointer p-0! text-lg hover:bg-transparent hover:text-gray-800 h-12"
      >
        <Gamepad2 className="w-4.5! h-4.5!" />
        Games
      </Button>

      <Button
        variant="ghost"
        className="text-gray-800 cursor-pointer p-0! text-lg hover:bg-transparent hover:text-gray-800 h-12"
      >
        <Croissant className="w-4.5! h-4.5!" />
        Items
      </Button>

      <Button
        variant="ghost"
        className="text-gray-800 cursor-pointer p-0! text-lg hover:bg-transparent hover:text-gray-800 h-12"
      >
        <MapPin className="w-4.5! h-4.5!" />
        Locations
      </Button>
    </div>
  );
};
