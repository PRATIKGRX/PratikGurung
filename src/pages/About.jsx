import { FaMinus } from "react-icons/fa";
import { TfiGame } from "react-icons/tfi";
import { LuCodeXml } from "react-icons/lu";
import { CiPlay1 } from "react-icons/ci";
import { PiMicrophoneStage } from "react-icons/pi";
import { Link,Element } from "react-scroll";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";
const About = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // You can adjust the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="relative z-30">
      <div className="block md:hidden fixed bottom-4 right-4 z-[400]">
      <Link to="top" smooth={true} duration={500}>
        <button
          className={`p-3 bg-white text-black rounded-full transition-all duration-700 ease-in-out
            ${showButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
        >
          <FaAnglesUp />
        </button>
      </Link>
    </div>
      
      <div className="px-3 md:px-6 lg:px-20 xl:px-20 flex flex-col md:grid md:grid-cols-[30%_70%] ">
        <div className="hidden md:block ">
        </div>
        <Element name="top" className="flex md:flex-col gap-10 md:fixed pt-10 md:pt-16 xl:pt-20">
          <div className="">
            <h4 className="text-xl md:text-3xl xl:text-5xl font-bold">
              ABOUT ME
            </h4>
            <p className="text-md md:text-lg font-medium text-[#7a7a7a]">
              lets go My portfolio is out.
            </p>
          </div>
          <ul className="flex flex-col text-md tracking-wide text-[#afafaf]">
            <li className="">
           <Link spy={true} activeClass="active" to="introduction" smooth={true} duration={500} className="flex items-center gap-5 group/aboutNav cursor-pointer">
              <span className="inline-flex transform origin-left transition-transform duration-500 ease-in-out group-hover/aboutNav:scale-x-200 group-hover/aboutNav:text-white group-[.active]/aboutNav:scale-x-200 group-[.active]/aboutNav:text-white">
                <FaMinus className="text-2xl" />
              </span>
              <p className="transform transition-all duration-500 ease-in-out group-hover/aboutNav:translate-x-[5px] group-hover/aboutNav:text-white group-hover/aboutNav:text-md group-[.active]/aboutNav:translate-x-[5px] group-[.active]/aboutNav:text-white group-[.active]/aboutNav:text-md ">
                Introduction
              </p>
            </Link>
            </li>

            
            <li className="">
           <Link spy={true} activeClass="active" to="skills" smooth={true} duration={500} className="flex cursor-pointer items-center gap-5 group/aboutNav">
              <span className="inline-flex transform origin-left transition-transform duration-500 ease-in-out group-hover/aboutNav:scale-x-200 group-hover/aboutNav:text-white group-[.active]/aboutNav:scale-x-200 group-[.active]/aboutNav:text-white">
                <FaMinus className="text-2xl" />
              </span>
              <p className="transform transition-all duration-500 ease-in-out group-hover/aboutNav:translate-x-[5px] group-hover/aboutNav:text-white group-hover/aboutNav:text-md group-[.active]/aboutNav:translate-x-[5px] group-[.active]/aboutNav:text-white group-[.active]/aboutNav:text-md ">
                Skills
              </p>
            </Link>
            </li>
            <li className="">
           <Link spy={true} activeClass="active" to="education" smooth={true} duration={500} className="cursor-pointer flex items-center gap-5 group/aboutNav">
              <span className="inline-flex transform origin-left transition-transform duration-500 ease-in-out group-hover/aboutNav:scale-x-200 group-hover/aboutNav:text-white group-[.active]/aboutNav:scale-x-200 group-[.active]/aboutNav:text-white">
                <FaMinus className="text-2xl" />
              </span>
              <p className="transform transition-all duration-500 ease-in-out group-hover/aboutNav:translate-x-[5px] group-hover/aboutNav:text-white group-hover/aboutNav:text-md group-[.active]/aboutNav:translate-x-[5px] group-[.active]/aboutNav:text-white group-[.active]/aboutNav:text-md ">
                Education
              </p>
            </Link>
            </li>
          </ul>
        </Element>
        <div>
          <Element name="introduction" className="section flex flex-col gap-3 md:gap-6 mb-10 pt-10 md:pt-16 xl:pt-20">
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold">
              Introduction
            </h4>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-[25%_70%] md:gap-10">
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/480958295_1667221091342813_8878383285659530867_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFC3cdGchYCCqJR0BpgILfo2dp5g9JXS0TZ2nmD0ldLRClL1FbM6Ib6UvjQRQ86go4aGDZHLgdUrwh1XcZ-UNPg&_nc_ohc=RaxLXuLn7MEQ7kNvwGryROQ&_nc_oc=AdnsTAr4mKmToOjj4r4Le5tCMu9aTWImt25Ea3lYTOKHg06E-AAR20qDFLP4f3lSZHs&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=dVcVlfdWkOxHo5aAWCBeXg&oh=00_AfLOsVODMOGI_jnmoQK4XxOVh4OcDSyacuiJLxkPBe1H6g&oe=683DEE2D"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between py-2">
                <div>
                  <p className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-wide">
                    Pratik Gurung
                  </p>
                  <p className="text-lg xl:text-xl font-bold tracking-wide text-[#929292]">
                    Front End Developer
                  </p>
                </div>
                <p className="text-md xl:text-lg">
                  I started my journey in 2025, and so far, it's been going pretty well. I've run into a lot of challenges, but I never let them stop me. I just keep solving problems and pushing myself to keep going. It's not always easy, but I'm proud of the progress I've made.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="text-md xl:text-lg font-bold">Personal Details</p>
                <table className=" text-left ">
                  <tr className="h-auto md:h-2">
                    <th>Name</th>
                    <td>Pratik Gurung</td>
                  </tr>
                  <tr className="h-auto md:h-2">
                    <th>BirthDate</th>
                    <td>2006 AD</td>
                  </tr>
                  <tr className="h-auto md:h-2">
                    <th>Email</th>
                    <td>pratikgrx@gmail.com</td>
                  </tr>
                  <tr className="h-auto md:h-2">
                    <th>Address</th>
                    <td>Chitwan, Tandi</td>
                  </tr>
                </table>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-md xl:text-lg font-bold">Interest</p>
                <div className="md:grid md:grid-cols-4 flex items-center gap-4">
                  <div className="flex flex-col items-center border transform-all duration-300 hover:bg-white hover:text-black md:hover:shadow-[0_1px_15px_0px_rgba(255,255,255,0.3)] p-1 rounded-xl cursor-pointer">
                    <TfiGame />
                    <p>Games</p>
                  </div>
                   <div className="flex flex-col items-center border transform-all duration-300 hover:bg-white hover:text-black md:hover:shadow-[0_1px_15px_0px_rgba(255,255,255,0.3)] p-1 rounded-xl cursor-pointer">
                    <LuCodeXml />
                    <p>Coding</p>
                  </div>
                   <div className="flex flex-col items-center border transform-all duration-300 hover:bg-white hover:text-black md:hover:shadow-[0_1px_15px_0px_rgba(255,255,255,0.3)] p-1 rounded-xl cursor-pointer">
                    <CiPlay1 />
                    <p>Movies</p>
                  </div>
                   <div className="flex flex-col items-center border transform-all duration-300 hover:bg-white hover:text-black md:hover:shadow-[0_1px_15px_0px_rgba(255,255,255,0.3)] p-1 rounded-xl cursor-pointer">
                    <PiMicrophoneStage />
                    <p>Beatbox</p>
                  </div>
                </div>
              </div>
            </div>
          </Element>
          <Element name="skills" className="section pt-10 md:pt-16 xl:pt-20">
            <div className="flex flex-col gap-3 md:gap-5">
              <p className="text-xl font-bold md:text-2xl xl:text-3xl">
                Skills
              </p>
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 md:gap-8">
                <div className="text-center bg-[#2c2c2c] p-3 rounded-lg transition-all duration-300 hover:shadow-[0_2px_15px_0px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                  <p className="font-bold mb-2 md:mb-3">Website Development</p>
                  <p>
                    Yes, there's still a lot I don't know, but I'm constantly learning — and learning is a big part of coding. So far, I've picked up skills in HTML, CSS, JavaScript, React, and Tailwind, and I'm excited to keep growing from here.
                  </p>
                  <p className="font-medium my-2 md:my-3">Tools i know</p>
                  <div className="flex gap-2">
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-8 w-8 md:h-10 md:w-10 xl:h-14 xl:w-14"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M6 28L4 3H28L26 28L16 31L6 28Z"
                            fill="#E44D26"
                          ></path>{" "}
                          <path
                            d="M26 5H16V29.5L24 27L26 5Z"
                            fill="#F16529"
                          ></path>{" "}
                          <path
                            d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                            fill="white"
                          ></path>{" "}
                        </g>
                      </svg>
                      <p>Html</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-8 w-8 md:h-10 md:w-10 xl:h-14 xl:w-14"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>file_type_css</title>
                          <polygon
                            points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201"
                            style={{ fill: "#1572b6" }}
                          />
                          <polygon
                            points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"
                            style={{ fill: "#33a9dc" }}
                          />
                          <polygon
                            points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191"
                            style={{ fill: "#ffffff" }}
                          />
                          <polygon
                            points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151"
                            style={{ fill: "#ffffff" }}
                          />
                          <polygon
                            points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191"
                            style={{ fill: "#ebebeb" }}
                          />
                        </g>
                      </svg>
                      <p>CSS</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-8 w-8 md:h-10 md:w-10 xl:h-14 xl:w-14"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>file_type_js_official</title>
                          <rect
                            x="2"
                            y="2"
                            width="28"
                            height="28"
                            style={{ fill: "#f5de19" }}
                          />
                          <path
                            d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"
                            style={{ fill: "#000000" }}
                          />
                        </g>
                      </svg>
                      <p>JS</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-8 w-8 md:h-10 md:w-10 xl:h-14 xl:w-14"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                            fill="#53C1DE"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                            fill="#53C1DE"
                          ></path>{" "}
                        </g>
                      </svg>
                      <p>React</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-8 w-8 md:h-10 md:w-10 xl:h-14 xl:w-14"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <title>file_type_tailwind</title>
                        <path
                          d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6
         c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9
         q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                          fill="#44a8b3"
                        />
                      </svg>
                      <p>Tailwind</p>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-[#2c2c2c] p-3 rounded-lg transition-all duration-300 hover:shadow-[0_2px_15px_0px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                  <p className="font-bold mb-2 md:mb-3">Soft Skills</p>
                  <p>Besides technical skills, I've also developed some important soft skills, which I believe are a key part of personal growth. I'm social and friendly, and I have the ability to learn things quickly, which helps me adapt and work well with others.</p>
                  <p className="font-medium my-2 md:my-3">Skills i got</p>
                  <div className="flex flex-col sm:grid sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm md:text-md xl:text-lg">
                      <IoMdCheckmarkCircleOutline />Communication
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-md xl:text-lg">
                      <IoMdCheckmarkCircleOutline />Teamwork
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-md xl:text-lg">
                      <IoMdCheckmarkCircleOutline />Problem-Solving
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-md xl:text-lg">
                      <IoMdCheckmarkCircleOutline />Time Management
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-md xl:text-lg">
                      <IoMdCheckmarkCircleOutline />Adaptability
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-md xl:text-lg">
                      <IoMdCheckmarkCircleOutline />Critical Thinking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
          <Element name="education" className="section pt-10 md:pt-16 xl:pt-20">
            <div className="flex flex-col gap-5 md:gap-10">
              <p className="text-xl font-bold md:text-2xl xl:text-3xl">
                Education
              </p>
              <div className="flex flex-col gap-10">
                <div className=" md:flex-row md:gap-10 flex flex-col items-start md:items-center">
                  <div className="md:min-w-30 lg:min-w-40 lg:h-40 xl:min-w-60 xl:h-60 md:h-30 w-15 h-15 overflow-hidden rounded-full">
                    <img src="https://theedunepal.ap-south-1.linodeobjects.com/schoolfair/clients/pashupatischool/logo/232237712-111802097819680-345934742964457969-n_1645605190.webp" alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <div>
                      <p className="text-xl">Pashupati Secondary School</p>
                    <div className="flex justify-between text-[#a7a7a7]">
                      <p>Ranjha,Nepalgunj</p>
                    <p>2012-2022</p>
                    </div>
                    </div>
                    <p>Pashupati Secondary School, Nepalgunj is a community-based academic institute in Ranjha, Banke district, Nepal. I feel lucky to have studied there—it gave me all the essential knowledge I needed at the time and left me with many unforgettable memories with my classmates.</p>
                  </div>
                </div>
               <div className=" md:flex-row md:gap-10 flex flex-col items-start md:items-center">
                   <div className="md:min-w-30 lg:min-w-40 lg:h-40 xl:min-w-60 xl:h-60 md:h-30 w-15 h-15 overflow-hidden rounded-full">
                    <img src="https://th.bing.com/th/id/OIP.f_s4iRCCHKh54KJeglClgAAAAA?cb=iwp2&rs=1&pid=ImgDetMain" alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <div>
                      <p className="text-xl">Sky Rider Secondary English Boarding School</p>
                    <div className="flex justify-between text-[#a7a7a7]">
                      <p>Tandi, Chitwan</p>
                    <p>2022-2024</p>
                    </div>
                    </div>
                    <p>Skyrider is a leading +2 institution in Science and Management, known for top results at both district and national levels, and even gaining recognition abroad. Studying here not only improved my academic knowledge but also helped me grow personally. I learned important life skills, built self-confidence, and understood the real meaning of self-improvement and discipline.</p>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
    </main>
  );
};

export default About;
