import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress } from "react-icons/si";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  progress: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "React", progress: 90, icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", progress: 85, icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind CSS", progress: 88, icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Framer Motion", progress: 82, icon: <SiFramer />, color: "#BB22AA" },
  { name: "Node.js", progress: 87, icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express", progress: 85, icon: <SiExpress />, color: "#000000" },
];

export const SkillProgress = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <Card
          key={skill.name}
          className="p-6 bg-white rounded-2xl shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] border-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <motion.div
              className="text-3xl"
              style={{ color: skill.color }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden shadow-[inset_2px_2px_4px_#bebebe]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </Card>
      ))}
    </div>
  );
};
