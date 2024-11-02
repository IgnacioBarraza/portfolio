import { faCodepen, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faNetworkWired, faTools, faWind } from "@fortawesome/free-solid-svg-icons";

export interface ProjectStackProps {
  stack: string;
}

export const getIcon = (category: string) => {
  switch (category) {
    case "framework":
      return faCodepen;
    case "backend":
      return faNetworkWired;
    case "database":
      return faDatabase;
    case "style":
      return faWind;
    case "docker":
      return faDocker
    case "tool":
      return faTools;
    case "language":
      return faCode
    default:
      return faTools; // Default icon for anything else
  }
};

export const techCategories: Record<string, string> = {
  "NextJS": "framework",
  "Tailwind CSS": "style",
  "MongoDB": "database",
  "Node.JS": "backend",
  "Express.JS": "backend",
  "Mongoose": "tool",
  "Angular": "framework",
  "Bootstrap": "style",
  "Firebase": "database",
  "TypeScript": "language",
  "Vite": "framework",
  "MySQL": "database",
  "React": "framework",
  "Docker": "docker",
  "Docker Compose": "docker",
  "Docker Hub": "docker",
  "NestJS": "framework"
};