import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  try {
    const username = personalData.devUsername || "defaultUsername";
    const res = await fetch(`https://dev.to/api/articles?username=${username}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.filter((item) => item?.cover_image);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
