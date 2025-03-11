import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";

// Define the skill type
interface Skill {
  name: string;
  level: number;
  color: string;
}

// Sample 3D skills data
const skills3d: Skill[] = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "CSS/SCSS", level: 85, color: "#1572B6" },
  { name: "React Native", level: 75, color: "#61DAFB" },
  { name: "GraphQL", level: 70, color: "#E10098" },
  { name: "UI/UX", level: 80, color: "#FF61F6" },
  { name: "Mobile Dev", level: 85, color: "#4285F4" }
];

// Individual skill sphere component
const SkillSphere = ({ skill }: { skill: Skill }) => {
  const position = [
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5
  ];

  const scale = 0.5 + (skill.level / 100) * 0.5;

  return (
    <mesh position={position as [number, number, number]} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={skill.color} />
      <Html distanceFactor={10}>
        <div className="skill-label">
          {skill.name}
        </div>
      </Html>
    </mesh>
  );
};

// HTML content in 3D space
const Html = ({ children, distanceFactor, position = [0, 0, 0], ...props }: any) => {
  return (
    <group position={position as [number, number, number]} {...props}>
      <div className="html-content" style={{
        position: 'absolute',
        fontSize: '12px',
        padding: '6px',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: '4px',
        color: 'white',
        transform: `scale(${distanceFactor / 10})`,
        transformOrigin: 'center center',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        {children}
      </div>
    </group>
  );
};

const SkillsScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 3/4}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      {skills3d.map((skill) => (
        <SkillSphere key={skill.name} skill={skill} />
      ))}
    </>
  );
};

const Skills3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[500px] rounded-xl overflow-hidden"
    >
      <Canvas>
        <SkillsScene />
      </Canvas>
    </motion.div>
  );
};

export default Skills3D;