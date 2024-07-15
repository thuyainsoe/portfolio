import profile from "@/assets/profile.jpg";
import Transition from "@/components/Transition";

const Home = () => {
  return (
    <Transition>
      <div
        className="container-md md:h-[calc(100vh-100px)] bg-white dark:bg-[#121212]
      flex-col-reverse md:flex-row flex items-center justify-center gap-[30px] md:justify-between w-full py-[40px] md:pb-[100px]"
      >
        <div className="font-bold text-[2rem] md:text-[2.5rem] dark:text-white text-[#282828]">
          Hi👋 <br />
          My name is <br />
          <span className="linear-text">Thu Yain Soe</span> <br />
          Frontend Developer
        </div>
        <div className="background-linear  max-h-[350px] max-w-[350px] rounded-[50%] p-[5px]">
          <img
            className="w-full object-cover rounded-[50%]"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </Transition>
  );
};

export default Home;
