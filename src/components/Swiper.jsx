import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

export default function MySlider() {
  const swiperRef = useRef(null);
  const projects = [
    {
      title: "Gaming Website",
      shortDesc: "A little description about the project",
      longDesc: "Lorem ipsum dolor sit amet...",
      image: "/assets/project-1.png",

      liveLink: "",
      githubLink: "",
    },
    {
      title: "Weather Forecast",
      shortDesc: "A little description about the project",
      longDesc: "Lorem ipsum dolor sit amet...",
      image: "/assets/project-2.png",

      liveLink: "",
      githubLink: "",
    },
    {
      title: "Simple Calculator",
      shortDesc: "A little description about the project",
      longDesc: "Lorem ipsum dolor sit amet...",
      image: "/assets/project-3.png",

      liveLink: "",
      githubLink: "",
    },
    {
      title: "Dummy Portfolio",
      shortDesc: "A little description about the project",
      longDesc: "Lorem ipsum dolor sit amet...",
      image: "/assets/project-4.png",

      liveLink: "",
      githubLink: "",
    },
    {
      title: "3d Website",
      shortDesc: "A little description about the project",
      longDesc: "Lorem ipsum dolor sit amet...",
      image: "/assets/project-5.png",

      liveLink: "",
      githubLink: "",
    },
    // Add more projects
  ];

  return (
    <section>
      <div>
        <h4 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-wider">
          Projects
        </h4>
        <div className="flex justify-between items-center">
          <p className="text-md lg:text-lg font-medium text-[#b1b1b1]">
            All collection of my projects
          </p>
          <div className="hidden md:flex items-center gap-5 text-[#b1b1b1]">
            <IoMdArrowRoundBack
              className="cursor-pointer"
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
            />
            <p className="text-md lg:text-lg font-medium ">Navigate</p>
            <IoMdArrowRoundForward
              className="cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <Swiper
          className="w-full swiper-container"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-slide flex flex-col md:grid md:grid-cols-[35%_55%] gap-10">
                <div className="project-image h-full w-full overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="project-content flex flex-col gap-5 md:gap-0 md:justify-between md:py-8">
                  <div className="project-header">
                    <p className="project-title text-xl font-bold md:text-2xl">
                      {project.title}
                    </p>
                    <p className="project-subtitle text-md md:text-lg font-medium text-[#9b9b9b]">
                      {project.shortDesc}
                    </p>
                  </div>
                  <p className="project-description text-sm md:text-md xl:text-lg text-[#d1d1d1]">
                    {project.longDesc}
                  </p>
                  <div className="project-buttons flex gap-5 items-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-outline border border-white px-4 py-2 text-md font-medium md:text-lg rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                        Visit page
                      </button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-filled border border-white px-4 py-2 text-md font-medium md:text-lg rounded-sm transition-all duration-500 bg-white text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                        Git hub
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
