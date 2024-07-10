import Transition from "@/components/Transition";

const experienceData = [
  {
    id: 1,
    companyname: "Better HR",
    position: "Frontend Intern",
    country: "Myanmar",
    category: "Full Time",
    period: "Oct 2022 - Dec 2022",
  },
  {
    id: 2,
    companyname: "Better HR",
    position: "Junior Frontend Developer",
    country: "Myanmar",
    category: "Full Time",
    period: "Jan 2023 - May 2023",
  },
  {
    id: 3,
    companyname: "Better HR",
    position: "Web Frontend Developer",
    country: "Myanmar",
    category: "Full Time",
    period: "Jun 2023 - Oct 2023",
  },
  {
    id: 4,
    companyname: "Visible One",
    position: "Web Frontend Developer",
    country: "Hong Kong",
    category: "Full Time",
    period: "Sep 2023 - Current",
  },
];

const educationData = [
  {
    id: 1,
    schoolName: "University Of Computer Studies",
    major: "Computer Science",
    city: "Yangon",
    period: "Dec 2016 - Feb 2020",
  },
  {
    id: 2,
    schoolName: "Fairway Technology",
    major: "Professional Web Developer",
    city: "Yangon",
    period: "Feb 2022 - May 2022",
  },
  {
    id: 3,
    schoolName: "Fairway Technology",
    major: "Rockstar Developer",
    city: "Yangon",
    period: "Dec 2023 - Feb 2024",
  },
];

const About = () => {
  return (
    <Transition>
      <div className="container-md w-full py-[100px] flex flex-col gap-[30px] bg-white dark:bg-[#121212]">
        {/* About Me */}
        <div className="flex flex-col gap-[30px] max-w-[800px] text-[#282828] dark:text-white">
          <h2 className="font-bold text-[2.5rem] befor-line relative">
            About Me
          </h2>
          <div>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </div>
        </div>
        {/* Work Experience */}
        <div className="flex flex-col mb-[30px] text-[#282828] dark:text-white">
          <h2 className="font-bold text-[2.5rem] befor-line relative">
            Work Experience
          </h2>
          {experienceData.map((data) => (
            <div
              className="max-w-[800px] py-[20px] border-b border-[#2828286d] dark:border-[#ffffff79]"
              key={data.id}
            >
              <div className="w-full flex flex-row justify-between items-center">
                {/* right section */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col">{data.position}</div>
                  <div className="flex flex-row gap-[15px] text-[0.8rem] opacity-[0.5] dark:opacity-[1]">
                    <span className="flex gap-[5px] items-center">
                      <svg
                        className="w-[13px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          className="fill-[#282828] dark:fill-[#fff]"
                          d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"
                        />
                      </svg>
                      {data.companyname}
                    </span>
                    <span className="flex gap-[5px] items-center">
                      <svg
                        className="w-[13px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          className="fill-[#282828] dark:fill-[#fff]"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                      {data.country}
                    </span>
                  </div>
                </div>
                {/* left section */}
                <div className="flex flex-col gap-[10px] min-w-[150px]">
                  <span className="w-fit px-[15px] py-[3px] rounded-[40px] bg-green-400 text-[0.7rem] text-white">
                    {data.category}
                  </span>
                  <span className="flex gap-[10px] text-[0.8rem] opacity-[0.5] dark:opacity-[1]">
                    <svg
                      className="w-[13px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        className="fill-[#282828] dark:fill-[#fff]"
                        d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                      />
                    </svg>
                    {data.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Education */}
        <div className="flex flex-col mb-[30px] text-[#282828] dark:text-white">
          <h2 className="font-bold text-[2.5rem] befor-line relative">
            Education
          </h2>
          {educationData.map((data) => (
            <div
              className="max-w-[800px] py-[20px] border-b border-[#2828286d] dark:border-[#ffffff79]"
              key={data.id}
            >
              <div className="w-full flex flex-row justify-between items-center">
                {/* right section */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col">{data.major}</div>
                  <div className="flex flex-row gap-[15px] text-[0.8rem] opacity-[0.5] dark:opacity-[1]">
                    <span className="flex gap-[5px] items-center">
                      <svg
                        className="w-[13px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          className="fill-[#282828] dark:fill-[#fff]"
                          d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"
                        />
                      </svg>
                      {data.schoolName}
                    </span>
                    <span className="flex gap-[5px] items-center">
                      <svg
                        className="w-[13px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          className="fill-[#282828] dark:fill-[#fff]"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                      {data.city}
                    </span>
                  </div>
                </div>
                {/* left section */}
                <div className="flex flex-col gap-[10px] min-w-[150px]">
                  <span className="flex gap-[10px] text-[0.8rem] opacity-[0.5] dark:opacity-[1]">
                    <svg
                      className="w-[13px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        className="fill-[#282828] dark:fill-[#fff]"
                        d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                      />
                    </svg>
                    {data.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default About;
