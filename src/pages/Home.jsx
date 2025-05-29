import { PiGoogleLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <div className="h-[calc(100vh-40px)] md:h-[calc(100vh-64px)] xl:h-[calc(100vh-80px)] flex justify-center relative z-30 items-center px-3 md:px-14 lg:px-40 xl:px-60 mt-10 md:mt-16 xl:mt-20">
        <div className="flex flex-col gap-7 md:gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl xl:text-6xl tracking-wider">
              PRATIK GURUNG
            </h1>
            <h2 className="text-xl md:text-3xl xl:text-4xl tracking-wide">
              Front-End Developer
            </h2>
          </div>
          <p className="text-md md:text-lg xl:text-xl tracking-wide">
            The journey is long, but that's what makes it exciting. I'm not here
            to stay in the comfort zone — I'm here to outgrow it. As a
            passionate developer, I chase curiosity, dive into the unknown, and
            thrive on learning things I've never tried before. Every challenge
            is a chance to evolve, and I'm all in for the adventure.
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <Link to="/project">
                <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                  View Full Projects
                </button>
              </Link>
            </div>
            <div className="flex gap-3 md:gap-5 xl:gap-8 text-2xl md:text-3xl ">
              <a
                className="sm:hover:scale-110 transition-all duration-200 cursor-pointer"
                href="mailto:pratikgrx06@gmail.com"
              >
                <PiGoogleLogoBold />
              </a>
              <a
                className="sm:hover:scale-110 transition-all duration-200 cursor-pointer"
                href="https://www.instagram.com/pratik_izz.me?igsh=MWU3ZGtuNmdsdmQ0Zg=="
              >
                <FaInstagram />
              </a>
              <TbBrandLinkedin className="sm:hover:scale-110 transition-all duration-200 cursor-pointer" />
              <a
                className="sm:hover:scale-110 transition-all duration-200 cursor-pointer"
                href="https://github.com/PRATIKGRX"
              >
                <VscGithubAlt />
              </a>

              <a className="sm:hover:scale-110 transition-all duration-200 cursor-pointer" href="https://www.facebook.com/gurung.kochoro.3152">
                <AiOutlineFacebook  />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
