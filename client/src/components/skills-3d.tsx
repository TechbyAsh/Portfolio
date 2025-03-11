
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define skill type
interface Skill {
  name: string;
  level: number;
  color: string;
}

// Define skills
const skills: Skill[] = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
  { name: "Framer Motion", level: 82, color: "#BB22AA" },
  { name: "Node.js", level: 87, color: "#339933" },
  { name: "Express", level: 85, color: "#000000" },
];

// Animated skill bubble component
const SkillBubble: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Set a random initial position based on index
  useEffect(() => {
    const angle = (index / skills.length) * Math.PI * 2;
    const radius = 150;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    setPosition({ x, y });
  }, [index]);
  
  // Calculate the size based on skill level (50px to 80px)
  const size = 50 + (skill.level / 100) * 30;
  
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm md:text-base cursor-pointer shadow-lg"
      style={{
        backgroundColor: skill.color,
        color: getContrastYIQ(skill.color),
        width: size,
        height: size,
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: 'translate(-50%, -50%)',
        zIndex: Math.floor(skill.level / 10)
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: [0, Math.random() * 20 - 10],
        y: [0, Math.random() * 20 - 10],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        x: {
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(0,0,0,0.3)"
      }}
    >
      {skill.name}
    </motion.div>
  );
};

// Helper function to determine text color based on background color
function getContrastYIQ(hexcolor: string): string {
  // If hexcolor is black, return white
  if (hexcolor === "#000000") return "#FFFFFF";
  
  // Remove # if present
  hexcolor = hexcolor.replace("#", "");
  
  // Convert to RGB
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  
  // Calculate YIQ ratio
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  
  // Return black or white depending on YIQ ratio
  return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

// Main component export
const Skills3D: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-2xl md:text-3xl font-bold text-white/20">My Skills</div>
      </div>
      {skills.map((skill, index) => (
        <SkillBubble key={index} skill={skill} index={index} />
      ))}
    </motion.div>
  );
};

export default Skills3D;
