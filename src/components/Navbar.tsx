import { RiMoonLine, RiSunLine } from "react-icons/ri";

function Navbar({
  handleToggleTheme,
  theme,
}: {
  handleToggleTheme: () => void;
  theme: "light" | "dark";
}) {
  return (
    <nav className=" w-full flex justify-between px-4 py-2 backdrop-blur-sm saturate-50 bg-BgWhite_200 dark:bg-BgDark_200 sticky top-0">
      <h6 className=" ttext-secondary dark:text-LightAccent">Dbn.</h6>
      <button
        onClick={handleToggleTheme}
        className=" aspect-square p-1 w-fit grid place-items-center border-[1px] border-LightAccent rounded-md cursor-pointer bg-BgWhite_200"
      >
        {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
      </button>
    </nav>
  );
}

export default Navbar;
