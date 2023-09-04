import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import useSwitchTheme from "./hooks/useSwitchTheme";

function App() {
  const { mode, toggleTheme } = useSwitchTheme();

  return (
    <div
      className=" dark:bg-BgDark
     bg-BgWhite "
    >
      <div className=" w-full lg:max-w-[60vw] mx-auto">
        <Navbar handleToggleTheme={toggleTheme} theme={mode} />
        <Hero />
        <Experience />
        <Projects />
        <Tools />
        <Footer />
      </div>
    </div>
  );
}

export default App;
