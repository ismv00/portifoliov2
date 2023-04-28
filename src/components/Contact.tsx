import { FaDownload } from "react-icons/fa";
import { SendWhatsapp } from "../data";

import { handleCv } from "../data";

export function Contact() {
  return (
    <div className="w-4/5 m-auto mt-12 ">
      <div
        className="flex justify-around items-center w-4/5 m-auto gap-5 max-sm:w-full"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <button
          className="flex items-center justify-center pr-1 gap-5 w-[290px] h-[60px] rounded-2xl bg-amber-300 border text-lg text-center hover:bg-black hover:text-white transition-all max-sm:font-medium max-sm:text-xs text-slate-600"
          onClick={handleCv}
        >
          Download CV <FaDownload />
        </button>
        <button
          className="flex items-center justify-center pr-1 gap-5 w-[290px] h-[60px] rounded-2xl text-slate-600 bg-slate-50 border text-lg text-center hover:bg-black hover:text-white max-sm:font-medium max-sm:text-xs"
          onClick={SendWhatsapp}
        >
          Contact me
        </button>
      </div>
    </div>
  );
}
