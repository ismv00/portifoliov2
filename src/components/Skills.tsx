import { projects } from "../data";

export function Skills() {
  return (
    <div className="w-4/5 m-auto mt-12">
      <div data-aos="fade-up" data-aos-delay="1200">
        <div className="bg-white rounded-2xl w-auto h-24 flex justify-center items-center p-5">
          <button className="bg-slate-300 rounded-lg h-11 w-full border text-center text-lg font-medium text-slate-700">
            Projects
          </button>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-offset="100"
          data-aos-delay="1400"
        >
          <ul className="grid grid-cols-2 grid-rows-3 gap-20 p-6 mt-20 max-sm:grid-cols-1">
            {projects.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} target="_blank">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-[400px] h-[400px] rounded-3xl object-contain max-sm:object-fill resize"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
