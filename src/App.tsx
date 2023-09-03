import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
function App() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    isDark
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }
  return (
    <div
      className=" dark:bg-BgDark
     bg-BgWhite "
    >
      <div className=" w-full lg:max-w-[60vw] mx-auto">
        <Navbar handleToggleTheme={toggleTheme} />
        <Hero />
        <Projects />
        <Tools />
      </div>
    </div>
  );
}

export default App;
