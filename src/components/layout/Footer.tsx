import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center pb-10 font-extralight">
      <span className="flex items-center gap-1">
        Designed by
        <Link href="https://github.com/SirGuiL" target="_blank">
          Guilherme Lima
        </Link>
      </span>
    </div>
  );
};
