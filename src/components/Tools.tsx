import Marquee from "react-fast-marquee";
import {
  Html,
  Css,
  JavaScript,
  TypeScript,
  TailwindCss,
  Node,
  Express,
  Matlab,
  React,
  Next,
  AutoCad,
} from "./Techs";
export default function Tools() {
  return (
    <div className="p-4 pb-8">
      <h3 className=" text-3xl py-6 text-BgDark dark:text-BgWhite">
        Technologies & Tools
      </h3>
      <Marquee pauseOnHover speed={60}>
        <Html />
        <Css />
        <JavaScript />
        <TailwindCss />
        <TypeScript />
        <Node />
        <Matlab />
        <Express />
        <React />
        <Next />
        <AutoCad />
      </Marquee>
    </div>
  );
}
