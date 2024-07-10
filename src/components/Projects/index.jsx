import Transition from "@/components/Transition";
import project2 from "@/assets/project2.png";

const projects = [
  {
    id: 1,
    name: "GOIP",
    image: project2,
    description:
      "This project is a client-focused website developed under my current company, featuring third-party integrations such as Mapbox. Implemented using HTML, CSS, and JavaScript, with WordPress serving as the backend, the website serves as an informational platform.",
    techstacks: ["HTML", "CSS", "JS", "Wordpress"],
    link: "",
    codelink: "",
  },
  {
    id: 2,
    name: "GOIP",
    image: project2,
    description:
      "This project is a client-focused website developed under my current company, featuring third-party integrations such as Mapbox. Implemented using HTML, CSS, and JavaScript, with WordPress serving as the backend, the website serves as an informational platform.",
    techstacks: ["HTML", "CSS", "JS", "Wordpress"],
    link: "",
    codelink: "",
  },
  {
    id: 3,
    name: "GOIP",
    image: project2,
    description:
      "This project is a client-focused website developed under my current company, featuring third-party integrations such as Mapbox. Implemented using HTML, CSS, and JavaScript, with WordPress serving as the backend, the website serves as an informational platform.",
    techstacks: ["HTML", "CSS", "JS", "Wordpress"],
    link: "",
    codelink: "",
  },
  {
    id: 4,
    name: "GOIP",
    image: project2,
    description:
      "This project is a client-focused website developed under my current company, featuring third-party integrations such as Mapbox. Implemented using HTML, CSS, and JavaScript, with WordPress serving as the backend, the website serves as an informational platform.",
    techstacks: ["HTML", "CSS", "JS", "Wordpress"],
    link: "",
    codelink: "",
  },
];

const Projects = () => {
  return (
    <Transition>
      <div className="container-md py-[100px] bg-white dark:bg-[#121212] text-[#282828] dark:text-white">
        <div className="flex flex-col gap-[30px]">
          <h2 className="font-bold text-[2.5rem] befor-line relative">
            Projects
          </h2>
        </div>

        <div className="w-full flex flex-wrap gap-[40px] mt-[30px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[calc((100%-40px*2)/3)] rounded-[20px] overflow-hidden box-shadow border dark:border-white"
            >
              <div className="w-full">
                <img
                  className="aspect-[375_/_260] w-full object-cover"
                  src={project.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col p-[20px] gap-[10px]">
                <h2 className="text-[1.5rem] font-bold">{project.name}</h2>
                <div className="text-[14px]">{project.description}</div>
                <div className="flex text-[14px] gap-[10px]">
                  <span className="font-bold">Techstack:</span>
                  <div className="flex gap-[5px] text-[12px] text-white">
                    {project.techstacks.map((techstack, index) => (
                      <span
                        key={index}
                        className="w-fit p-[5px] bg-green-400 rounded-lg"
                      >
                        {techstack}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-[10px] text-[12px] underline">
                  <a href="#">Link Preview</a>
                  <a href="#">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default Projects;
