import Transition from "@/components/Transition";
import htmlLogo from "@/assets/htmllogo.svg";
import cssLogo from "@/assets/csslogo.svg";
import jsLogo from "@/assets/jslogo.svg";
import reactLogo from "@/assets/reactlogo.svg";
import vueLogo from "@/assets/vuelogo.svg";
import bootstrapLogo from "@/assets/bootstrap.svg";
import tailwindLogo from "@/assets/tailwind.png";
import sassLogo from "@/assets/sasslogo.svg";
import gitLogo from "@/assets/gitlogo.svg";
import nodeLogo from "@/assets/nodejs.svg";
import npmLogo from "@/assets/npmlogo.svg";
import firebase from "@/assets/firebase.png";

const logos = [
  { path: htmlLogo },
  { path: cssLogo },
  { path: jsLogo },
  { path: reactLogo },
  { path: vueLogo },
  { path: bootstrapLogo },
  { path: tailwindLogo },
  { path: sassLogo },
  { path: gitLogo },
  { path: nodeLogo },
  { path: npmLogo },
  { path: firebase },
];

const TechStack = () => {
  return (
    <Transition>
      <div
        className="container-md w-full h-[calc(100vh-100px)] flex flex-col
      text-[#282828] dark:text-white justify-center py-[40px] md:pb-[100px] bg-white dark:bg-[#121212]"
      >
        <div className="flex flex-col gap-[30px]">
          <h2 className="font-bold text-[2rem] md:text-[2.5rem] relative">
            My Tech Stack
          </h2>
          <div>Technologies I’ve been working.</div>
        </div>
        <div className="mt-[30px] flex flex-row flex-wrap w-full justify-center gap-[40px]">
          {logos.map((logo, index) => (
            <div
              className="w-[calc((100%-3*40px)/4)] md:w-[calc((100%-5*40px)/6)] h-[80px]"
              key={index}
            >
              <img
                className="w-full h-full object-contain"
                src={logo.path}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default TechStack;
