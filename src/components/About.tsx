import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { aboutData } from "../data";

export function About() {
  const { text } = aboutData;
  return (
    <div className="w-4/5 m-auto mt-12">
      <div
        className="text-base text-center text-slate-600 italic"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <FaQuoteLeft className="text-xs" />
        {text}
        <FaQuoteRight className="text-xs" />
      </div>
    </div>
  );
}
