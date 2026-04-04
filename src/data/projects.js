import NotedPic1 from '../assets/NotedPic1.png'
import NotedPic2 from '../assets/NotedPic2.png'
import NotedPic3 from '../assets/NotedPic3.png'
import FuegoPic1 from '../assets/FuegoPic1.png'
import FuegoPic2 from '../assets/FuegoPic2.png'
import FuegoPic3 from '../assets/FuegoPic3.png'

export const projects = [

  {
    id: 'Noted',
    title: 'Noted',
    description: 'A small task tracker built with React, Vite, and express using the sqlite database.',
    tags: ['React', 'Express', 'SQLite'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Darsheels/Noted',
    pictures: [NotedPic1, NotedPic2,NotedPic3,]
  },
  {
    id: 'Fuego',
    title: 'Fuego',
    description: 'A side‑view 2D firefighting simulator where the player responds to emergencies, drives trucks, manages equipment, and progresses through a firefighter career made in a python library called pygame , art done in Aseprite and several other softwares(STILL IN PROGRESS!!)',
    tags: ['Python' , 'Pygame', 'Aseprite'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Darsheets/Fuego',
    pictures: [FuegoPic1,FuegoPic2,FuegoPic3,]
  },
]

