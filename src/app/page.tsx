import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import Blog from "../components/Blog";

export type Post = Record<
  "title" | "author" | "slug" | "_id" | "tag" | "updatedAt",
  string
>;

function Home() {
  return (
    <div
      className=" dark:bg-BgDark
     bg-BgWhite "
    >
      <div className=" w-full lg:max-w-[60vw] mx-auto">
        <Hero />
        <Experience />
        <Blog />
        <Projects />
        <Tools />
      </div>
    </div>
  );
}

export default Home;
