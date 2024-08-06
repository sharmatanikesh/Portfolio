export const navItems = [
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Project", link: "#project" },
    {name:"Experience", link:"#experience"},
    { name: "Contact Me", link: "#contact" },
  ];

  export const projects = [
    {
      id: 1,
      title: "Paytm Service App ",
      des: "Developed a Paytm service app that enables users to transfer money and view transaction history, leveraging a monorepo architecture with Prisma, Next.js, and Node.js for a robust and efficient experience",
      img: "/MonoRepo.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/sharmatanikesh/Paytm-App",
    },
    {
      id: 2,
      title: "ForensiBus - Android App",
      des: "The ForensiBus app is a mobile application developed for the company ForensiBus. It provides a convenient way to access the company's website using a WebView.",
      img: "/forensibus.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/sharmatanikesh/ForensiBus/tree/master",
    },
    {
      id: 3,
      title: "E-Library Admin Dashboard",
      des: "his web application allows users to manage their digital library efficiently. ",
      img: "/E-lib.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/sharmatanikesh/BookApiDashBoard",
    },
    {
      id: 4,
      title: "E-Library Api",
      des: "This project is a E-Library Dashboard system implemented in TypeScript. It provides APIs to create, update, list, get and delete books",
      img: "/BookApi.png",
      iconLists: [ "/ts.svg"],
      link: "https://github.com/sharmatanikesh/BookAPI",
    },
    {
      id: 5,
      title: "Next.js Book Download Platform",
      des: "Developed a Next.js website where users can easily download books, providing a streamlined platform for digital content access.",
      img: "/Next-js_lib.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
    {
      id: 6,
      title: "Blogging website",
      des: "This project includes both frontend and backend components for creating a full-fledged blogging platform.",
      img: "/WorkerBlog.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/sharmatanikesh/Blogging",
    },
  ];
  


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/sharmatanikesh"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/TanikeshSharma"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/tanikesh-sharma-25b924230/"
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Developed an admin panel with enhanced interactivity using Material UI, React.js, Docker, React Query, Material UI Chart, and Chart.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Developed a mobile app for a company on the Android platform using Java",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Wordpress Developer",
    desc: "Worked on and maintained a website for 6 months, fixing bugs and adding new features using WordPress",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelancer",
    desc: "Develops and customizes websites for clients, enhancing functionality and design to meet their needs",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];