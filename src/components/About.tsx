import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import tanikesh from '../../public/Tanikesh3.png'

const content = [
  {
    title: "About Me",
    description:
      "I’m Tanikesh Sharma, a Fullstack Developer with expertise in Next.js and React.js. I’m passionate about building dynamic, efficient web applications and constantly seek to push the limits of modern web technologies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={tanikesh}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="About Me"
        />
      </div>
    ),
  },
  
  {
    title: "My Interests",
    description:
      "I’m currently delving into the exciting world of Web3 and exploring Solana to stay ahead in the evolving tech landscape.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        My Interests
      </div>
    ),
  },
  {
    title: "Feel Free to Contact Me",
    description:
      "If you’re interested in collaborating or just want to discuss the latest in web development and blockchain, don’t hesitate to reach out. Let’s connect and explore new possibilities together!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Feel Free to Contact Me
      </div>
    ),
  },
];
function About() {
  return (
    <div className="py-20" id="about">
        <h1 className="heading mb-2 ">
            About Me
        
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default About;
