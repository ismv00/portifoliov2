import { linksSocialMedia } from "../data";
export function Header() {
  return (
    <div className="w-4/5 m-auto mt-12">
      <div className="flex justify-between items-center w-4/5 h-50 m-auto max-sm:flex-col flex-1 max-sm:w-full">
        <img
          className="rounded-full h-60 w-60 border border-solid border-gray-500 m-6 max-sm:h-40 max-sm:w-40"
          src="https://avatars.githubusercontent.com/u/62908769?v=4"
          alt="Minha foto, tirada do perfil do github"
        />
        <div className="flex flex-col items-start m-auto w-4/6 justify-between p-8 max-sm:gap-6 text-center">
          <h1 className="font-bold text-5xl leading-69 text-gray-700 text-shadow offset-y-4 offset-x-0 blur-4 max-sm:text-4xl">
            Igor S. Menezes
          </h1>
          <p className="font-medium text-base text-gray-600 leading-33 my-2">
            Software Enginner
          </p>
          <ul className="flex justify-start items-center gap-6 my-2 text-gray-700 text-xl">
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
    </div>
  );
}
