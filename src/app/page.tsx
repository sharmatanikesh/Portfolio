import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import Image from "next/image";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
      
    </div>
  </main>
  );
}
