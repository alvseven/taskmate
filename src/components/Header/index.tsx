import Link from "next/link";

import { brunoAce } from "@/app/layout";

import { ToggleTheme } from "../ToggleTheme";

export const Header = () => {
  return (
    <header className="w-full h-20 flex px-6 pt-4">
      <Link href="#" className="flex items-center justify-center flex-1 ">
        <span
          className={`${brunoAce.className} text-logo text-[#0A4D68]  hover:brightness-200 transition delay-200`}
        >
          taskmate
        </span>
      </Link>
      <ToggleTheme />
    </header>
  );
};
