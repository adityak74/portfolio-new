import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aditya Karnam Gururaj Rao', // e.g: 'Name | Developer'
  lang: 'en, es', // e.g: en, es, fr, jp
  description: 'Resume', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'This is',
  name: 'Aditya Karnam',
  subtitle: 'Full Stack Blockchain Developer',
  cta: 'Who am I?',
  technologies: [
    {
      id: nanoid(),
      img: 'typescript.png',
      alt: 'trypescript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      id: nanoid(),
      img: 'aws.png',
      alt: 'aws',
      url: 'https://aws.amazon.com/console/',
    },
    {
      id: nanoid(),
      img: 'docker.png',
      alt: 'docker',
      url: 'https://www.docker.com/',
    },
    {
      id: nanoid(),
      img: 'ethereum.png',
      alt: 'ethereum',
      url: 'https://ethereum.org/',
    },
    {
      id: nanoid(),
      img: 'go.png',
      alt: 'go',
      url: 'https://go.dev/',
    },
    {
      id: nanoid(),
      img: 'graphql.png',
      alt: 'graphql',
      url: 'https://graphql.org/',
    },
    {
      id: nanoid(),
      img: 'hashicorp-terraform.png',
      alt: 'hashicorp-terraform',
      url: 'https://www.terraform.io/',
    },
    {
      id: nanoid(),
      img: 'html5.png',
      alt: 'html5',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    },
    {
      id: nanoid(),
      img: 'kafka.png',
      alt: 'kafka',
      url: 'https://kafka.apache.org/',
    },
    {
      id: nanoid(),
      img: 'kubernets.png',
      alt: 'kubernets',
      url: 'https://kubernetes.io/',
    },
    {
      id: nanoid(),
      img: 'nodejs.png',
      alt: 'nodejs',
      url: 'https://nodejs.org/',
    },
    {
      id: nanoid(),
      img: 'postgresql.png',
      alt: 'postgresql',
      url: 'https://www.postgresql.org/',
    },
    {
      id: nanoid(),
      img: 'rails.png',
      alt: 'rails',
      url: 'https://rubyonrails.org/',
    },
    {
      id: nanoid(),
      img: 'react.png',
      alt: 'react',
      url: 'https://reactjs.org/',
    },
    {
      id: nanoid(),
      img: 'redis.png',
      alt: 'redis',
      url: 'https://redis.io/',
    },
    {
      id: nanoid(),
      img: 'sql.png',
      alt: 'sql',
      url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
    },
    {
      id: nanoid(),
      img: 'webpack.png',
      alt: 'kafka',
      url: 'https://webpack.js.org/',
    },
    {
      id: nanoid(),
      img: 'gatsby.png',
      alt: 'gatsbyjs',
      url: 'https://www.gatsbyjs.com/',
    },
  ],
};

// ABOUT DATA
export const aboutData = {
  img: 'square-profile.png',
  paragraphOne: 'Software engineer by choice. Space enthusiast by passion.',
  paragraphTwo:
    'I write softwares to make lives easier and better. Some of my work improves life and health as well.',
  paragraphThree: 'I blog at levelup.gitconnected.com',
  resume: 'https://www.linkedin.com/in/adityakarnamgrao/overlay/1635471869991/single-media-viewer/', // if no resume, the button will not show up
  resumePDF: 'Aditya_Karnam_Gururaj_Rao_Resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Medium Unblocker',
    info: 'Unlock your favorite medium articles without having to register.',
    info2:
      'This extension removes cookies related to medium.com to unblock you from the sign-up/login article blocker.',
    url: 'https://chrome.google.com/webstore/detail/mediumunblocker/bbkjfcomhiademhhopcammgdlehblkgn?hl=en-GB&authuser=0',
    repo: 'https://github.com/adityak74/mediumUnblocker',
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me? Great choice!',
  btn: "Let's Connect",
  email: 'adityakarnam.grao@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/aditya_karnam',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adityakarnamgrao/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/adityak74',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
