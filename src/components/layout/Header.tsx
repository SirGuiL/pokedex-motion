import Image from "next/image";
import { Button } from "../ui/button";
import PsyduckIcon from "@/assets/psyduck.png";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto w-full max-w-300 py-2 flex items-center justify-between">
        <Image src="/logo.png" alt="logo" width={64} height={64} />

        <Button className="h-auto p-0! hover:bg-transparent" variant="ghost">
          <Image src={PsyduckIcon} alt="Psyduck" width={40} height={40} />
        </Button>
      </div>
    </header>
  );
};
