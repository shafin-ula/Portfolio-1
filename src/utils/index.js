import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";

export const headlines = [
    "Hi, I'm Clayton.",
    "I'm a Software Developer",
    "I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!"
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Blog" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'SkyCast',
        image: cast,
        linkGithub: 'https://github.com/jcblanc2/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'ChatGenius',
        image: chat,
        linkGithub: 'https://github.com/jcblanc2/ChatGenius',
        linkOnline: 'https://chat-genius-puce.vercel.app/',
        description: 'A web application that harnesses the power of Large Language Models (LLMs) to facilitate natural and engaging conversations.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'InstaWall',
        image: insta,
        linkGithub: 'https://github.com/jcblanc2/InstaWall',
        linkOnline: null,
        description: 'InstaWall is a mobile application that allows users to discover, search, like, and share wallpapers from the Unsplash API.',
        techStack: ['Dart', 'Flutter', 'Firebase']
    },
    {
        title: 'PenX',
        image: pen,
        linkGithub: 'https://github.com/jcblanc2/PenX',
        linkOnline: 'https://pen-x.vercel.app/',
        description: 'A blog application built with React. It allows users to create and publish blog posts, as well as view and comment on other users\' posts.',
        techStack: ['MERN Stack', 'Tailwind CSS']
    },
    {
        title: 'History Tracer',
        image: tracer,
        linkGithub: 'https://github.com/jcblanc2/History-Tracer',
        linkOnline: null,
        description: 'History Tracer is A desktop application that reads history data from different web browsers and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    },
    {
        title: 'ORA-API',
        image: ora,
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        linkGithub: null,
        description: 'A RESTful API that provides access to a wide range of Bible-related information, including versions, books, verses, and search functionality.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    }
];

export const aboutMeText = [
    "Hey! I'm Johm, if you haven't already gathered that by now. I'm a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.",

    "I currently work for Google on Google Photos. I also toss in my ¢2 with the design systems teams from time to time (once an artist, always an artist, amirite?). Outside of work, I still love to paint. Any given Sunday I still love to paint. Any given Sunday I still love to paint. Any given Sunday ",
];

export const techList = [
    'JavaScript',
    'Python',
    'Dart',
    'Azure',
    'Docker',
    'Express',
    'Tailwind',
    'PostgreSQL',
    'MySQL',
];
