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
import Vue from '../assets/icons/vue.svg'
import PrimeVue from '../assets/icons/primevue.svg'
import FreeDictionary from '../assets/icons/dictionary.svg'
import Weather from '../assets/icons/weather.svg'
import MUI from '../assets/icons/mui.svg'
import Python from '../assets/icons/python.svg'
import OpenCV from '../assets/icons/opencv.svg'
import Numpy from '../assets/icons/numpy.svg'
import Spyder from '../assets/icons/spyder.svg'
import Firebase from '../assets/icons/firebase.svg'

export const projectData = [
  {
    id: 1,
    display: '/display/dental.svg',
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
    github: "",
    live: "https://dentalcaresystem.netlify.app/"
  },
  {
    id: 2,
    display: '/display/rdchime.svg',
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
    github: "",
    live: "https://rdchime-inventory.vercel.app/login"
  },
  {
    id: 3,
    display: '/display/aqualert.svg',
    featuredPhoto: AqualertF,
    title: 'Aqualert',
    year: '2024',
    tools: [
      { "name": "React Native", "icon": React },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind", "icon": TW },
      { "name": "Firebase", "icon": Firebase }
    ],
    toolNames: ["React Native", "Vite", "Tailwind", "Firebase"],
    details: "Aqualert is a mobile application developed as part of our thesis project. Its name combines “Aqua” and “Alert,” reflecting its purpose of helping users monitor water usage and detect potential leaks in real time. I was responsible for implementing the front-end based on provided designs and solely authored the full project documentation.",
    features: [
      "Water Consumption Graphs: Displays daily, weekly, and monthly usage (overall and per room).",
      "Real-Time Flow Rate Monitoring: Shows current water flow data.",
      "Leak Detection: Identifies possible leaks in specific rooms.",
      "User Notifications: Sends alerts when a leak is detected.",
      "Automatic Valve Control: Shuts off valves when leakage is found.",
      "Manual Valve Control: Users can remotely turn valves on or off through the app."
    ],
    github: "",
    live: ""
  },
  {
    id: 4,
    display: '/display/jflix.svg',
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
    github: "https://github.com/mrkjshcabute/jflix",
    live: "https://jflix-sigma.vercel.app/"
  },
  {
    id: 5,
    display: '/display/portfolio.svg',
    featuredPhoto: "",
    title: 'Portfolio V1',
    year: '2025',
    tools: [
      { "name": "React", "icon": React },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
    ],
    toolNames: ["React", "Vite", "Tailwind"],
    details: "Portfolio V1 is my first personal web portfolio, designed to showcase selected works, skills, and background as a front-end developer.",
    features: [
      "Home: Landing section with an introduction and quick links.",
      "Featured Projects: Highlighted personal and academic projects.",
      "All Projects: A complete collection of my work.",
      "About: A section detailing my background, skills, and contact information."
    ],
    github: "",
    live: "https://mrkjshcabute.vercel.app/"
  },
  {
    id: 6,
    display: '/display/joshionary.svg',
    featuredPhoto: "",
    title: 'Joshionary',
    year: '2025',
    tools: [
      { "name": "Vue", "icon": Vue },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
      { "name": "PrimeVue", "icon": PrimeVue },
      { "name": "Free Dictionary API", "icon": FreeDictionary }
    ],
    toolNames: ["Vue", "Vite", "Tailwind", "PrimeVue", "Free Dictionary API"],
    details: "Joshionary is a sleek and functional dictionary web app that lets you explore English words with ease. Whether you're searching for definitions, learning pronunciation, or checking out the word of the day — Joshionary has you covered. Built using Free Dictionary API.",
    features: [
      "Search Word: Instantly find definitions, parts of speech, and examples.",
      "Word of the Day: Discover a new word each day to expand your vocabulary.",
      "Phonetics: View the correct phonetic transcription of the word.",
      "Audio Pronunciation: Hear how the word is properly pronounced."
    ],
    github: "https://github.com/mrkjshcabute/joshionary",
    live: "https://joshionary.vercel.app/"
  },
  {
    id: 7,
    display: '/display/jwx.svg',
    featuredPhoto: "",
    title: 'Josh Weather Experience',
    year: '2025',
    tools: [
      { "name": "React", "icon": React },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
      { "name": "OpenWeatherMap API", "icon": Weather }
    ],
    toolNames: ["React", "Vite", "Tailwind", "OpenWeatherMap API"],
    details: "JWX is a modern and minimal weather web app that lets users check real-time weather conditions and forecasts for any city. Designed for simplicity and clarity, JWX gives users the weather information they need at a glance. Built with OpenWeatherMap API.",
    features: [
      "Search City: Get current weather data by entering any city name",
      "Humidity: Displays current humidity levels",
      "Wind: Shows wind speed",
      "Precipitation: Displays rainfall data",
      "Visibility: Provides visibility range in kilometers",
      "5-Day Forecast: Shows upcoming daily weather overview"
    ],
    github: "https://github.com/mrkjshcabute/jwx",
    live: "https://jwx-swart.vercel.app/"
  },
  {
    id: 8,
    display: '/display/chrono-task.svg',
    featuredPhoto: "",
    title: 'Chrono Task',
    year: '2025',
    tools: [
      { "name": "React", "icon": React },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
      { "name": "Material UI", "icon": MUI }
    ],
    toolNames: ["React", "Vite", "Tailwind", "Material UI"],
    details: "Chrono-Task is a minimalist and efficient task timer web app. It helps users stay focused and productive by letting them set custom tasks and durations, with an alarm notification when time is up.",
    features: [
      "Write Task Name: Input and label your current task",
      "Set Custom Duration: Define how long the task should take",
      "Alarm Notification: Get alerted with an alarm when your time is up"
    ],
    github: "https://github.com/mrkjshcabute/chrono-task",
    live: "https://chrono-task-two.vercel.app/"
  },
  {
    id: 9,
    display: '/display/rps.svg',
    featuredPhoto: "",
    title: 'Rock Paper Scissors',
    year: '2025',
    tools: [
      { "name": "Vue", "icon": Vue },
      { "name": "Vite", "icon": Vite },
      { "name": "Tailwind CSS", "icon": TW },
      { "name": "PrimeVue", "icon": PrimeVue }
    ],
    toolNames: ["Vue", "Vite", "Tailwind", "PrimeVue"],
    details: "A sleek and fun Rock-Paper-Scissors game built with Vue 3 and PrimeVue. Challenge the computer, track your score, and enjoy a smooth animated experience.",
    features: [
      "Instant play with real-time results",
      "Computer-generated choices",
      "Score tracking"
    ],
    github: "https://github.com/mrkjshcabute/rock-paper-scissors",
    live: "https://rock-paper-scissors-six-steel.vercel.app/"
  },
  {
    id: 10,
    display: '/display/fb.svg',
    featuredPhoto: "",
    title: 'Folklore Blooms',
    year: '2023',
    tools: [
      { "name": "HTML", "icon": HTML },
      { "name": "CSS", "icon": CSS }
    ],
    toolNames: ["HTML", "CSS"],
    details: "Folklore Blooms is a visually rich landing page that showcases my HTML and CSS skills through thoughtful layout, responsive design, and elegant styling. Inspired by natural elements and soft aesthetic tones, this project is a front-end demonstration of how structure and style come together to create a smooth user experience.",
    features: [
      "Clean and semantic HTML structure",
      "Custom CSS styling with a soft, folklore-inspired theme",
      "Responsive layout across devices",
      "Smooth Transitions"
    ],
    github: "https://github.com/mrkjshcabute/folklore-blooms",
    live: "https://folklore-blooms.vercel.app/"
  },
  {
    id: 11,
    display: '/display/calculator.svg',
    featuredPhoto: "",
    title: 'MERSUAH Calculator',
    year: '2022',
    tools: [
      { "name": "HTML", "icon": HTML },
      { "name": "CSS", "icon": CSS },
      { "name": "JavaScript", "icon": JS }
    ],
    toolNames: ["HTML", "CSS", "JavaScript"],
    details: "MERSUAH Calculator is a simple yet elegant web-based calculator built with pure HTML, CSS, and JavaScript—no frameworks, no libraries. It features a clean interface, smooth interactions, and a built-in Dark Mode toggle for user comfort.",
    features: [
      "Basic arithmetic operations: addition, subtraction, multiplication, division",
      "Responsive and accessible UI",
      "Dark Mode switch for low-light environments"
    ],
    github: "https://github.com/mrkjshcabute/calculator",
    live: "https://calculator-eight-kohl-53.vercel.app/"
  },
  {
    id: 12,
    display: '/display/fr.svg',
    featuredPhoto: "",
    title: 'Face Recognition',
    year: '2024',
    tools: [
      { "name": "Python", "icon": Python },
      { "name": "OpenCV (cv2)", "icon": OpenCV },
      { "name": "NumPy", "icon": Numpy },
      { "name": "Spyder IDE (Anaconda)", "icon": Spyder }
    ],
    toolNames: ["Python", "OpenCV", "Numpy", "Spyder"],
    details: "A face recognition system built with Python that identifies known individuals from a folder of stored images and labels unknown faces. This project was developed and tested using the Spyder IDE.",
    features: [
      "Face detection and recognition using OpenCV and face-recognition libraries",
      "Displays name and confidence score (e.g., 87.5%)",
      "Marks unrecognized faces as Unknown",
      "Supports multiple images per person for better accuracy",
      "Built and tested in Spyder (Anaconda Environment)"
    ],
    github: "https://github.com/mrkjshcabute/face-recognition",
    live: ""
  },
];
