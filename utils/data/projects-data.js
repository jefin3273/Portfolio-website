import doctor from "/public/image/doctor.webp";
import coffeeHouse from "/public/image/coffeeHouse.jpg";
import voluntrust from "/public/image/voluntrust.jpg";

export const projectsData = [
  {
    id: 1,
    name: "DocDial: Healthcare Management System",
    description:
      "Developed a secure appointment scheduling system with patient record management and doctor recommendation features. Working on publishing a research paper on the project's findings and innovations.",
    tools: ["NextJs", "MongoDB", "Prisma", "TypeScript", "NodeJs"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: doctor,
  },
  {
    id: 2,
    name: "Ettarra Coffee House",
    description:
      "Developed a web platform for Ettarra Coffee House that enables customers to discover, book, and attend exclusive supper club events. The system supports multi-level role management, event and inventory management, dynamic seat booking, and AI-powered event recommendations Features include QR-based check-ins, queue management, and scalability for high-traffic events.",
    tools: ["NextJs", "MongoDB", "OpenAI API", "Prisma", "TypeScript"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: coffeeHouse,
  },
  {
    id: 3,
    name: "Voluntrust",
    description:
      "Developed a Web/App to streamline volunteer mobilization and resource management during emergencies and large-scale events in Mumbai, such as monsoon floods and Mount Mary Fair. The app facilitates real-time coordination between volunteers, organizations, and authorities, ensuring faster response times and efficient resource distribution during crises.",
    tools: ["NextJs", "MongoDB", "OpenAI API", "Prisma", "TypeScript"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: voluntrust,
  },
];
