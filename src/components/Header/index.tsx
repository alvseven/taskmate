import Link from "next/link";
import { Bruno_Ace } from "next/font/google";

import { ToggleTheme } from "../ToggleTheme";

const brunoAce = Bruno_Ace({
  weight: "400",
  variable: "--font-bruno-ace",
  subsets: ["latin"],
});

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
