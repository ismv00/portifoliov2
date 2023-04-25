import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import project1img from "./assets/projects/project1.png";
import project2img from "./assets/projects/project2.png";
import project3img from "./assets/projects/project3.png";
import project4img from "./assets/projects/project4.png";
import project5img from "./assets/projects/project5.png";
import project6img from "./assets/projects/project6.png";

export const linksSocialMedia = [
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/556799725398",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/igorsmenezes/",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com/euigoorr",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/ismv00",
  },
];

export const projects = [
  {
    image: project1img,
    href: "https://github.com/ismv00/gamePlay",
    alt: "imagem do projeto gameplay",
  },
  {
    image: project2img,
    href: "https://clariartofc.com.br/",
    alt: "imagem do projeto clariart",
  },
  {
    image: project3img,
    href: "https://beauty-salon-mxjrg1opf-ismv00.vercel.app/",
    alt: "imagem do projeto beautysalon",
  },
  {
    image: project4img,
    href: "https://github.com/ismv00/BeTheHero2",
    alt: "imagem do projeto BeTheHero",
  },
  {
    image: project5img,
    href: "https://github.com/ismv00/nlwEcoleta",
    alt: "imagem do projeto Ecoleta",
  },
  {
    image: project6img,
    href: "https://github.com/ismv00/chatApp",
    alt: "imagem do projeto ChatApp",
  },
];

export function SendWhatsapp() {
  const phoneNumber = "5567999725398";
  const apiURL = `https://wa.me/${phoneNumber}`;
  window.open(apiURL, "_blank");
}

export function handleCv() {
  window.open(
    "https://drive.google.com/file/d/1LQia3pu4B5-gUtaccutlxXas8kLi1E5H/view?usp=share_link",
    "_blank"
  );
}
