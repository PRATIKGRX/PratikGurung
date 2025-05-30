import { PiGoogleLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineFacebook } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";


const Contact = () => {
   const formRef = useRef();
const [status, setStatus] = useState("");
const [visible, setVisible] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4ihsnq2",
      "template_5cfftts",
      formRef.current,
      "iQ7W0PgYCK1-qV0jQ"
    )
    .then((result) => {
  setStatus(" Message sent successfully!");
  setVisible(true);
  formRef.current.reset();

  setTimeout(() => setVisible(false), 4000); // fade out after 4 sec
  setTimeout(() => setStatus(""), 5000);     // clear after fade
})
.catch((error) => {
  setStatus(" Failed to send message.");
  setVisible(true);

  setTimeout(() => setVisible(false), 4000);
  setTimeout(() => setStatus(""), 5000);
});
};

  return (
    <footer className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center relative z-30 gap-2 md:gap-8 pt-50 md:pt-46 xl:pt-20">
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
              <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 md:gap-6 xl:gap-8 w-[80vw] md:w-[60vw] xl:w-95"
    >
      <input
        type="text"
        name="name"
        required
        className="border rounded-lg border-[#777777] px-5 py-1 text-lg"
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        required
        className="border rounded-lg border-[#777777] px-5 py-1 text-lg"
        placeholder="E-mail"
      />
      <textarea
        name="message"
        required
        className="border rounded-lg border-[#777777] px-5 py-1 text-lg resize-none"
        placeholder="Your Message"
      ></textarea>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="rounded-lg px-5 py-2 bg-[#313131] text-white cursor-pointer transition-transform hover:-translate-y-1 duration-500"
        >
          Send Message
        </button>
      </div>
    </form>
   <p
  className={`text-center text-lg font-medium py-2 mt-4 transition-all rounded-lg duration-500 ease-out transform ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
  } ${
    status.includes("successfully")
      ? "text-green-500 bg-white"
      : status.includes("Failed")
      ? "text-red-500 bg-white"
      : "invisible"
  }`}
>
  {status}
</p>



        </div>
      </div>
      <div className="relative z-30 flex justify-center text-sm md:text-md">
        <p>&copy; 2025 Pratik Grx. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
