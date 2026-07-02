import FuegoPic1 from "../assets/FuegoPic1.png";
import FuegoPic2 from "../assets/FuegoPic2.png";
import FuegoPic3 from "../assets/FuegoPic3.png";
import FuegoPic4 from "../assets/FuegoPic4.png";
import PortfolioPic1 from "../assets/PortfolioPic1.png";
import PortfolioPic2 from "../assets/PortfolioPic2.png";
import PortfolioPic3 from "../assets/PortfolioPic3.png";
import PortfolioPic4 from "../assets/PortfolioPic4.png";
import Gsec1 from "../assets/Gsec1.png";
import Gsec2 from "../assets/Gsec2.png";
import Gsec3 from "../assets/Gsec3.png";
import Gsec4 from "../assets/Gsec4.png";

export const projects = [
  {
    id: "Fuego",
    title: "Fuego",
    description:
      "A side‑view 2D firefighting simulator where the player responds to emergencies, drives trucks, manages equipment, and progresses through a firefighter career made in a python library called pygame , art done in Aseprite and several other softwares(OUT NOW!!)",
    tags: ["Python", "Pygame", "Aseprite"],
    liveUrl: "https://darshgames.itch.io/fuego",
    repoUrl: "https://github.com/Darsheels/Fuego",
    pictures: [FuegoPic1, FuegoPic2, FuegoPic3, FuegoPic4], //FuegoPic1,FuegoPic2,FuegoPic3,FuegoPic4
  },
  {
    id: "My Portfolio",
    title: "My Portfolio",
    description:
      "My Personal Portfolio made in JavaScript , HTML and CSS using React as the frontend",
    tags: ["React", "Express", "Sqlite", "HTML", "CSS"],
    liveUrl: "https://darsheelcodes.vercel.app/",
    repoUrl: "https://github.com/Darsheels/MyPortfolio",
    pictures: [PortfolioPic4, PortfolioPic2, PortfolioPic3, PortfolioPic1],
  },
  {
    id: "GuardoraSecurity",
    title: "Guardora Security",
    description:
      "Guardora Security is a lightweight, threat‑scanning platform designed to help individuals and small teams instantly detect phishing attempts, malicious URLs, and dangerous QR codes before they cause damage. Built for speed, clarity, and real‑world protection, Guardora gives users a simple way to verify suspicious links and stay safe online.",
    tags: ["React", "Express", "Sqlite", "HTML", "CSS"],
    liveUrl: "https://guardorasecurity.up.railway.app/",
    repoUrl: "https://github.com/Darsheets/GuardoraSecurity",
    pictures: [Gsec1, Gsec2, Gsec3, Gsec4],
  },
];