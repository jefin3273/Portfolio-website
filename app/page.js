import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";

// Dynamically import all components with SSR: false to avoid rendering them during SSR
const HeroSection = dynamic(
  () => import("./components/homepage/hero-section"),
  { ssr: false }
);
const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false,
});
const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("./components/homepage/projects"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("./components/homepage/contact"), {
  ssr: false,
});
const Blog = dynamic(() => import("./components/homepage/blog"), {
  ssr: false,
});
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
