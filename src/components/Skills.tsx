import { projects } from "../data";

export function Skills() {
  return (
    <div className="w-4/5 m-auto mt-12 max-sm:font-medium">
      <div data-aos="fade-up" data-aos-delay="1200">
        <div className="bg-white rounded-2xl w-auto h-24 flex justify-center items-center p-5 ">
          <button className="bg-slate-300 rounded-lg h-11 w-full border text-center text-lg font-medium text-slate-600 max-sm:font-medium max-sm:text-xs">
            Projects
          </button>
        </div>

        <div>
          <ul className="grid grid-cols-3 grid-rows-2 gap-20 p-6 mt-6 max-sm:grid-cols-1 max-sm:w-auto h-auto">
            {projects.map((item, index) => {
              return (
                <li
                  className=" my-1 "
                  key={index}
                  data-aos="zoom-in-left"
                  data-aos-offset="100"
                  data-aos-delay={item.delay}
                >
                  <div className="w-auto h-auto">
                    <a href={item.href} target="_blank">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className=" rounded-3xl object-contain resize w-auto h-auto"
                      />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
