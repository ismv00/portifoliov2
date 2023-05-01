import { linksSocialMedia } from "../data";
export function Header() {
  return (
    <header className="w-4/5 m-auto mt-12">
      <div className="flex justify-between items-center w-4/5 h-50 m-auto max-sm:flex-col flex-1 max-sm:w-full">
        <img
          className="rounded-full h-60 w-60 border border-solid border-gray-500 m-6 max-sm:h-[124px] max-sm:w-[124px]"
          src="https://avatars.githubusercontent.com/u/62908769?v=4"
          alt="Minha foto, tirada do perfil do github"
          data-aos="fade-down"
          data-aos-delay="100"
        />
        <div className=" flex flex-col items-start m-auto w-4/6 justify-between p-8 max-sm:gap-6 text-center max-sm:items-center max-sm:w-full max-xs:w-full">
          <div className="m-auto">
            <h1
              className="font-bold text-5xl leading-69 text-gray-700 text-shadow offset-y-4 offset-x-0 blur-4 max-sm:text-4xl max-sm:font-medium max-xs:text-2xl"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Igor S. Menezes
            </h1>
            <p
              className="font-medium text-base text-gray-600 leading-33 my-2 max-sm:text-sm"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Software Enginner
            </p>
            <p
              className="font-medium text-sm text-gray-500 leading-33 my-2 italic max-sm:text-sm"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              ismv00@icloud.com
            </p>
          </div>
          <ul
            className="flex justify-center items-center gap-6 my-2 text-gray-700 text-xl text-center m-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {linksSocialMedia.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} target="_blank">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
