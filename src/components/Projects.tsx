import { RiArrowRightLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="p-4">
      <h3 className=" text-3xl py-6 text-BgDark dark:text-BgWhite">
        Personal Projects
      </h3>
      <section>
        <span className="flex items-center gap-1">
          <a
            href=""
            className=" my-2 hover:border-b-[1px] dark:text-LightAccent text-secondary hover: border-LightAccent"
          >
            Chemical Engineering E-Library
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine />
          </span>
        </span>
        <p className="py-2 text-BgDark dark:text-BgWhite">
          The chemical engineering e-library is a digital library that contains
          resources related to chemical engineering. These resources include
          textbooks,articles and other useful materials. Chemical engineering
          e-libraries are a valuable resource for students, researchers, and
          professionals in the chemical engineering field.
        </p>
      </section>
      <section>
        <span className="flex items-center gap-1">
          <a
            href="https://github.com/diabeney/create-smooth-app"
            className=" my-2 hover:border-b-[1px]  dark:text-LightAccent text-secondary hover: border-LightAccent"
          >
            Create Smooth App
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine />
          </span>
        </span>

        <p className="py-2 text-BgDark dark:text-BgWhite">
          Create Smooth App is a CLI Tool for scaffolding new NodeJs Projects
          with Typescipt and React apps with ViteJs.
        </p>
      </section>
      <a
        href="https://github.com/diabeney?tab=repositories"
        className=" my-2 border-b-[1px] text-LightAccent text-secondary  border-LightAccent"
      >
        See more personal projects{" "}
      </a>
    </div>
  );
}
