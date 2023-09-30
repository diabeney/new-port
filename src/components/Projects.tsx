import { RiArrowRightLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="p-4">
      <h1 className=" text-3xl py-6 text-BgDark dark:text-BgWhite">Projects</h1>
      <section>
        <span className="flex items-center gap-1">
          <a
            href="https://cheesa.vercel.app/"
            target="_blank"
            className=" my-2 hover:underline dark:text-LightAccent text-secondary "
          >
            CHEESA-KNUST
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine color={"#c0c0c0"} />
          </span>
        </span>
        <p className="py-2 text-BgDark">
          Official website for the Chemical Engineering Student's Association,
          Kwame Nkrumah University of Science & Technology.
        </p>
      </section>
      <section>
        <span className="flex items-center gap-1">
          <a
            href="https://cheesa.netlify.app/"
            target="_blank"
            className=" my-2 hover:underline dark:text-LightAccent text-secondary "
          >
            Chemical Engineering E-Library
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine color={"#c0c0c0"} />
          </span>
        </span>
        <p className="py-2 text-BgDark">
          The chemical engineering e-library is a digital library that contains
          resources related to chemical engineering. These resources include
          textbooks,articles and other useful materials.
        </p>
      </section>
      <section>
        <span className="flex items-center gap-1">
          <a
            href="https://github.com/diabeney/personal-blog-api"
            className=" my-2 hover:underline dark:text-LightAccent text-secondary "
          >
            Personal Blog API
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine color={"#c0c0c0"} />
          </span>
        </span>

        <p className="py-2 text-BgDark">
          The Personal Blog RESTful API is a backend service developed using
          Node.js and the Express.js framework. It serves as the backend system
          for my blog articles.
        </p>
      </section>
      <section>
        <span className="flex items-center gap-1">
          <a
            href="https://github.com/diabeney/create-smooth-app"
            className=" my-2 hover:underline dark:text-LightAccent text-secondary "
          >
            Create Smooth App
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine color={"#c0c0c0"} />
          </span>
        </span>

        <p className="py-2 text-BgDark ">
          Create Smooth App is a CLI Tool for scaffolding new ExpressJs
          applications with MongoDB and NPM Libraries Projects with TypeScript.
        </p>
      </section>
      <section>
        <span className="flex items-center gap-1">
          <a
            href="https://github.com/diabeney/create-smooth-app"
            className=" my-2 hover:underline dark:text-LightAccent text-secondary "
          >
            Pseudo-SSR
          </a>
          <span className=" -rotate-45">
            <RiArrowRightLine color={"#c0c0c0"} />
          </span>
        </span>

        <p className="py-2 text-BgDark">
          "Pseudo-SSR" is a custom implementation of server-side rendering (SSR)
          with React, from scratch. In addition, it incorporates a
          file-system-based router.
        </p>
      </section>

      <a
        href="https://github.com/diabeney?tab=repositories"
        className=" my-2 border-b-[1px] dark:text-LightAccent text-secondary  border-LightAccent"
      >
        See more personal projects{" "}
      </a>
    </div>
  );
}
