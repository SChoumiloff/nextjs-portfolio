import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Head from "next/head";

export default function Home() {
  
  return (
    <html>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <title>Sacha Choumiloff</title>
      </head>
      <body>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mt-24 mx-auto px-12 py-4">
            <Navbar />
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </div>
        </main>    
      </body>
    </html>
    
  );
}
