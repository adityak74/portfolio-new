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
};

// ABOUT DATA
export const aboutData = {
  img: 'square-profile.png',
  paragraphOne: 'Software engineer by choice. Space enthusiast by passion.',
  paragraphTwo:
    'I write softwares to make lives easier and better. Some of my work improves life and health as well.',
  paragraphThree: 'I blog at levelup.gitconnected.com',
  resume: 'https://www.linkedin.com/in/adityakarnamgrao/overlay/1635471869991/single-media-viewer/', // if no resume, the button will not show up
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
