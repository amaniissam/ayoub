"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

import ExpertiseSkills from "@/components/ExpertiseSkills/ExpertiseSkills";
import Hero from "@/components/Hero/Hero";
import MyReels from "@/components/MyReels/MyReels";
import ContactCTA from "@/components/ContactCTA/ContactCTA";

import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Navbar/>
      <main className="content">
        {/* HERO */}
        <section id="home" className="hero-dealing">
          <Hero/>
        </section>

        {/* ABOUT */}
        <section id="skills" className="about-new">
          <ExpertiseSkills/>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <MyReels/>
        </section>

        {/* CONTACT */}
        <section id="contact" >
          <ContactCTA/>
        </section>
      </main>
      <Footer/>
    </>
  );
}