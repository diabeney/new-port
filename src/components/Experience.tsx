export default function Experience() {
  return (
    <div className="p-4">
      <h3 className=" text-3xl py-6 text-BgDark dark:text-BgWhite">
        Experience
      </h3>
      <section>
        <span className="flex items-center gap-1">
          <p className="  text-BgDark dark:text-BgWhite">
            Frontend Developer -{" "}
            <a
              href="https://twitter.com/_slightlyTechie"
              target=" _blank"
              className=" my-2 hover:border-b-[1px] dark:text-LightAccent text-secondary hover: border-LightAccent"
            >
              Slightly Techie
            </a>{" "}
          </p>
        </span>
        <small className=" text-slate-600 dark:text-slate-300">
          February, 2023 - Present
        </small>
        <p className="py-2 text-BgDark dark:text-BgWhite">
          At Slightly Techie, I collaborated with other skilled developers for
          the front-end development of several projects, including a CRM
          project, a laundry web application, and an OKR (Objectives and Key
          Results) project. I worked closely with the design team to create
          user-friendly and visually appealing interfaces that met the needs of
          the clients.
        </p>
      </section>
      <a
        href="https://github.com/diabeney?tab=repositories"
        className=" my-2 border-b-[1px] dark:text-LightAccent text-secondary  border-LightAccent"
      >
        See my resume{" "}
      </a>
    </div>
  );
}
