"use client";
import Link from "next/link";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import useSwitchTheme from "../hooks/useSwitchTheme";

function Navbar() {
  const { mode, toggleTheme } = useSwitchTheme();
  return (
    <nav className=" w-full flex justify-between px-4 py-2 backdrop-blur-md saturate-150  sticky top-0">
      <section className="flex gap-8 items-center ">
        <div className=" text-secondary  dark:text-LightAccent">
          <Link href="/" className="  heading">
            Dbn.
          </Link>
        </div>
      </section>
      <button
        onClick={toggleTheme}
        className=" aspect-square p-1 w-fit grid place-items-center border-[1px] border-LightAccent rounded-md cursor-pointer bg-BgWhite_200"
      >
        {mode === "light" ? (
          <RiMoonLine className="text-black" />
        ) : (
          <RiSunLine className=" text-black" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
