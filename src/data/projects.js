import NotedPic1 from '../assets/NotedPic1.png'
import NotedPic2 from '../assets/NotedPic2.png'
import NotedPic3 from '../assets/NotedPic3.png'
import FuegoPic1 from '../assets/FuegoPic1.png'
import FuegoPic2 from '../assets/FuegoPic2.png'
import FuegoPic3 from '../assets/FuegoPic3.png'
import FuegoPic4 from '../assets/FuegoPic4.png'
import NotedPic4 from '../assets/NotedPic4.png'
import PortfolioPic1 from '../assets/PortfolioPic1.png'
import PortfolioPic2 from '../assets/PortfolioPic2.png'
import PortfolioPic3 from '../assets/PortfolioPic3.png'
import PortfolioPic4 from '../assets/PortfolioPic4.png'

export const projects = [

  {
    id: 'Noted',
    title: 'Noted',
    description: 'A Full Stack Task Manager Web Application Made in JavaScript , HTML and CSS using React for the Frontend and Express for the Backend and SQLite used for Data Management for the Users.',
    tags: ['React', 'Express', 'SQLite' , 'HTML', 'CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Darsheels/Noted',
    pictures: [NotedPic1, NotedPic2,NotedPic3,NotedPic4]
  },
  {
    id: 'Fuego',
    title: 'Fuego',
    description: 'A side‑view 2D firefighting simulator where the player responds to emergencies, drives trucks, manages equipment, and progresses through a firefighter career made in a python library called pygame , art done in Aseprite and several other softwares(STILL IN PROGRESS!!)',
    tags: ['Python' , 'Pygame', 'Aseprite'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Darsheels/Fuego',
    pictures: [FuegoPic1,FuegoPic2,FuegoPic3,FuegoPic4]
  },
  {
    id: 'My Portfolio',
    title: 'My Portfolio',
    description: 'My Personal Portfolio made in JavaScript , HTML and CSS using React as the frontend',
    tags: ['React' , 'Express', 'Sqlite' , 'HTML' , 'CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Darsheels/Fuego',
    pictures: [PortfolioPic4,PortfolioPic2,PortfolioPic3, PortfolioPic1]
  },
]

