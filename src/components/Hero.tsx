import { RiGithubLine, RiTwitterLine, RiLinkedinBoxLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="p-4 dark:text-BgWhite text-BgDark">
      <section className="py-4">
        <h1 className=" dark:text-BgWhite text-4xl lg:text-5xl">
          Diabene Yaw Addo{" "}
        </h1>
        <p className=" dark:text-BgWhite text-secondary">Frontend Engineer</p>
      </section>
      <section>
        <p>
          A front-end developer with experience in building and designing
          user-friendly websites and web applications. I'm always looking for
          opportunities to learn and grow. Feel free to explore my portfolio and{" "}
          <a
            className=" hover:border-b-[1px] dark:text-LightAccent text-secondary hover: border-LightAccent"
            href="mailto:addodiabene69@gmail.com"
          >
            reach out
          </a>{" "}
          if you're ready to collaborate on your next project!
        </p>
        <br />
        <p>
          Currently, I'm building{" "}
          <a
            href=""
            className="hover:border-b-[1px] dark:text-LightAccent text-[#020202be] attention hover:border-LightAccent"
          >
            ChemInventory Pro
          </a>{" "}
          - A full-stack Chemical Inventory Management System web application
          designed to help chemical engineering students and laboratories
          efficiently manage their chemical inventory, ensure safety, and
          streamline research processes.
        </p>
      </section>
      <section className="flex gap-4 py-6 justify-center items-center">
        <a href="https://github.com/diabeney">
          <RiGithubLine size={24} color="#333" />
        </a>
        <a href="https://twitter.com/diabeneyy">
          <RiTwitterLine size={24} color="#333" />
        </a>
        <a href="https://www.linkedin.com/in/diabeney/">
          <RiLinkedinBoxLine size={24} color="#333" />
        </a>
        <div className="w-full h-[0.1px] bg-LightAccent"></div>
      </section>
    </div>
  );
}
