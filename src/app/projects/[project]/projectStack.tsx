import { getIcon, ProjectStackProps, techCategories } from "@/utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectStack: React.FC<ProjectStackProps> = ({ stack }) => {
  const techStack = stack.split(", "); // Split stack string into an array
  return (
    <div className="grid grid-cols-2 gap-4">
      {techStack.map((tech, index) => {
        const category = techCategories[tech] || "tool";
        const icon = getIcon(category);

        return (
          <div key={index} className="flex items-center gap-2">
            <FontAwesomeIcon icon={icon} className="w-8 h-8" />
            <span className="text-xl">{tech}</span>
          </div>
        );
      })}
    </div>
  );
};