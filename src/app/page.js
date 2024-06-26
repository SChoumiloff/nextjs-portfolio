"use client"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import { LanguageProvider } from "./components/LanguageContext";

export default function Home() {
  
  return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mt-24 mx-auto px-12 py-4">
            <LanguageProvider>
            <Navbar />
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
            </LanguageProvider>
          </div>
        </main>    
  );
}
