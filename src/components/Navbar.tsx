import { RiMoonLine } from "react-icons/ri";

function Navbar({ handleToggleTheme }: { handleToggleTheme: () => void }) {
  return (
    <nav className=" w-full flex justify-between px-4 py-2 backdrop-blur-md saturate-100 sticky top-0">
      <h6 className=" ttext-secondary dark:text-LightAccent">Dbn.</h6>
      <button
        onClick={handleToggleTheme}
        className=" aspect-square p-1 w-fit grid place-items-center border-[1px] border-LightAccent rounded-md cursor-pointer bg-white"
      >
        <RiMoonLine />
      </button>
    </nav>
  );
}

export default Navbar;
