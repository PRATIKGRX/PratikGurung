import { PiGoogleLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineFacebook } from "react-icons/ai";
const Contact = () => {
  return (
    <footer className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center relative z-30 gap-2 md:gap-8 mt-10 md:mt-16 xl:mt-20">
        <div className="text-center">
            <h4 className="text-3xl md:text-5xl font-bold tracking-wider">Contact</h4>
        <p className="text-lg md:text-xl font-medium text-[#c4c4c4]">Message me to collabe with me.</p>
        </div>
        <div className="flex gap-2 md:gap-5 text-lg md:text-xl ">
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
        <div>
            <form action="" className="flex flex-col gap-4 md:gap-6 xl:gap-8 w-[80vw] md:w-[60vw] xl:w-95">
                <input type="text" className=" border rounded-lg border-[#777777] px-5 py-1 text-lg" placeholder="Your Name"/>
            <input type="text" className=" border rounded-lg border-[#777777] px-5 py-1 text-lg" placeholder="E-mail"/>
            <textarea name="" id="" className=" border rounded-lg border-[#777777] px-5 py-1 text-lg resize-none" placeholder="Your Message" ></textarea>
            <div className="w-full flex justify-center">
                <button className=" rounded-lg px-5 py-2 bg-[#313131] cursor-pointer transition-transform hover:-translate-y-1 duration-500">Send Message</button>
            </div>
            </form>
        </div>
      </div>
      <div className="relative z-30 flex justify-center text-sm md:text-md">
        <p>&copy; 2025 Pratik Grx. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
