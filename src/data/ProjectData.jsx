import JoshPf from '../assets/img/josh-pf.png';
import HTML from '../assets/icons/html.svg'
import CSS from '../assets/icons/css.svg'
import JS from '../assets/icons/js.svg'
import Materialize from '../assets/icons/materialize.svg'
import React from '../assets/icons/react.svg'
import Vite from '../assets/icons/vite.svg'
import TW from '../assets/icons/tailwind.svg'
import ShadCN from '../assets/icons/shadcn.svg'
import MongoDB from '../assets/icons/mongodb.svg'
import Express from '../assets/icons/express.svg'
import Flowbite from '../assets/icons/flowbite.svg'
import TMDB from '../assets/icons/tmdb.svg'
import AppWrite from '../assets/icons/appwrite.svg'
import DentalF from '../assets/img/dental.svg'
import RDCHIMEF from '../assets/img/rdchime.svg'
import AqualertF from '../assets/img/aqualert.svg'
import JflixF from '../assets/img/jflix.svg'

export const projectData = [
  {
    id: 1,
    display: JoshPf,
    featuredPhoto: DentalF,
    title: 'Dental Care System',
    year: '2023',
    tools: [
      { "name": "HTML", "icon": HTML },
      { "name": "CSS", "icon": CSS },
      { "name": "JavaScript", "icon": JS },
      { "name": "Materialize", "icon": Materialize }
    ],
    toolNames: ["HTML", "CSS", "JavaScript", "Materialize"],
    details: "A web-based platform designed to modernize traditional dental clinic appointments by transitioning them to an online environment, streamlining the booking process for both patients and clinic staff. I contributed to this project by implementing essential features such as admin login and search functionalities.",
    features: [
      "Online Appointment Booking: Allows patients to conveniently schedule, reschedule, or cancel dental appointments through the system.",
      "User Authentication: Secure login functionality for clinic staff to access personalized features and data.",
      "Appointment Management: Dentists and staff can view, approve, or manage appointments in real time."
    ],
  },
  {
    id: 2,
    display: JoshPf,
    featuredPhoto: RDCHIMEF,
    title: 'RDCHIME Inventory System',
    year: '2024',
    tools: [
      { "name": "React", "icon": React },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
      { "name": "ShadCN UI", "icon": ShadCN },
      { "name": "MongoDB", "icon": MongoDB },
      { "name": "Express", "icon": Express }
    ],
    toolNames: ["React", "Vite", "Tailwind", "ShadCN UI", "MongoDB", "Express"],
    details: "An inventory management system developed for RDCHIME to efficiently monitor, track, and organize items. I served as the lead frontend developer, building and refining the user interface to ensure a smooth and user-friendly experience.",
    features: [
      "Dashboard: Provides an overview of system metrics and inventory status.",
      "Item Management: Enables users to add, update, and categorize inventory items.",
      "User Management: Allows administrators to create, update, or remove user accounts, assign roles, and manage access permissions.",
      "History Logs: Tracks changes and activities for accountability and auditing."
    ],
  },
  {
    id: 3,
    display: JoshPf,
    featuredPhoto: AqualertF,
    title: 'Aqualert',
    year: '2024',
    tools: [
      { "name": "HTML", "icon": HTML },
      { "name": "CSS", "icon": CSS },
      { "name": "JavaScript", "icon": JS },
      { "name": "Materialize", "icon": Materialize }
    ],
    toolNames: ["React-Native", "Vite", "Tailwind", "Firebase"],
    details: "Aqualert",
    features: [
      "Aqualert",
      "Aqualert",
      "Aqualert",
      "Aqualert",
      "Aqualert"
    ],
  },
  {
    id: 4,
    display: JoshPf,
    featuredPhoto: JflixF,
    title: 'Jflix',
    year: '2025',
    tools: [
      { "name": "React", "icon": React },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
      { "name": "Flowbite React", "icon": Flowbite },
      { "name": "TMDB API", "icon": TMDB },
      { "name": "AppWrite", "icon": AppWrite }
    ],
    toolNames: ["React", "Vite", "Tailwind", "Flowbite React", "TMDB API", "AppWrite"],
    details: "JFlix is a sleek and responsive movie web app that helps users discover movies effortlessly. Powered by The Movie Database (TMDB), JFlix displays trending titles, upcoming films, and a full searchable catalog. Users can even watch trailers directly on the platform.",
    features: [
      "Coming Soon: Browse upcoming movies with release dates and previews",
      "Trending Movies: See what’s popular right now",
      "All Movies: Explore a full catalog of films from TMDB",
      "Search: Find movies by title in real time",
      "Watch Trailers: Instantly play trailers for any movie"
    ],
  },
];
