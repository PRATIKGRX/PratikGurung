
import { RxDividerVertical } from "react-icons/rx";
import MySlider from "../components/Swiper";
const Project = () => {
  return (
    <main>

      <div className="px-3 md:px-6 lg:px-20 xl:px-20 mt-10 md:mt-16 xl:mt-20">
        <MySlider/>
        
        <section>
          <div>
            <div className="flex items-end gap-5">
              <p className="font-medium text-lg md:text-xl">Other projects</p>
              <RxDividerVertical />
              <div className="flex gap-2 items-center">
                <p className="border px-2 rounded-xl">All</p>
                <p>3D</p>
                <p>JS</p>
                <p>React</p>
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                {/* Text + buttons */}
                <div className="absolute bottom-5 left-5 opacity-100 md:opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 z-20">
                  <p className="text-2xl font-medium text-white">
                    Weather App
                  </p>
                  <div className="flex gap-5 mt-2">
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://weather-app-ba9e1.web.app/">Visit page</a>
                    </button>
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 bg-white text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://github.com/PRATIKGRX/Weather-App">Git hub</a>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <img
                  src="/assets/project-2.png"
                  alt="project-2"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                />
              </div>

              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                {/* Text + buttons */}
                <div className="absolute bottom-5 left-5 opacity-100 md:opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 z-20">
                  <p className="text-2xl font-medium text-white">
                    Gaming Website
                  </p>
                  <div className="flex gap-5 mt-2">
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://gaming-website-k8tt.vercel.app/">Visit page</a>
                      
                    </button>
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 bg-white text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://github.com/PRATIKGRX/gaming-website">Git hub</a>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <img
                  src="/assets/project-1.png"
                  alt="project-1"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                />
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                {/* Text + buttons */}
                <div className="absolute bottom-5 left-5 opacity-100 md:opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 z-20">
                  <p className="text-2xl font-medium text-white">
                    Calculator
                  </p>
                  <div className="flex gap-5 mt-2">
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://pratikgrx.github.io/Simple_Calculator/">Visit page</a>
                    </button>
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 bg-white text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://github.com/PRATIKGRX/Simple_Calculator">Git hub</a>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <img
                  src="/assets/project-3.png"
                  alt="project-3"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                />
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                {/* Text + buttons */}
                <div className="absolute bottom-5 left-5 opacity-100 md:opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 z-20">
                  <p className="text-2xl font-medium text-white">
                    Dummy Portfolio
                  </p>
                  <div className="flex gap-5 mt-2">
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://pratikgrx.github.io/Portfolio_Dummy_personal/">Visit page</a>
                    </button>
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 bg-white text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://github.com/PRATIKGRX/Portfolio_Dummy_personal">Git hub</a>
                    </button>
                  </div>
                </div>

                {/* Image */}
               <img
                  src="/assets/project-4.png"
                  alt="project-4"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                />
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                {/* Text + buttons */}
                <div className="absolute bottom-5 left-5 opacity-100 md:opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 z-20">
                  <p className="text-2xl font-medium text-white">
                   3d Test
                  </p>
                  <div className="flex gap-5 mt-2">
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://pratik-grx3d-project.vercel.app/">Visit page</a>
                    </button>
                    <button className="border border-white px-4 py-2 text-md font-medium md:text-l rounded-sm transition-all duration-500 bg-white text-black cursor-pointer hover:shadow-[0_2px_20px_1px_rgba(255,255,255,0.5)] hover:rounded-4xl">
                      <a href="https://github.com/PRATIKGRX/PratikGrx3dProject">Git hub</a>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <img
                  src="/assets/project-5.png"
                  alt="project-5"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                />
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Project;
