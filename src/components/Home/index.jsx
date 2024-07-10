import profile from "@/assets/profile.jpg";
import Transition from "@/components/Transition";

const Home = () => {
  return (
    <Transition>
      <div className="container-md h-[calc(100vh-100px)] bg-white dark:bg-[#121212] flex items-center justify-between w-full  pb-[100px]">
        <div className="font-bold text-[2.5rem] dark:text-white text-[#282828]">
          Hi👋 <br />
          My name is <br />
          <span className="linear-text">Thu Yain Soe</span> <br />
          Frontend Developer
        </div>
        <div className="background-linear min-w-[350px] min-h-[350px] max-h-[350px] max-w-[350px] rounded-[50%] p-[5px]">
          <img className="rounded-[50%]" src={profile} alt="" />
        </div>
      </div>
    </Transition>
  );
};

export default Home;
