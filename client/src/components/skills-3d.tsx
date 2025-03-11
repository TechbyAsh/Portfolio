
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';

// Define skill type
interface Skill3D {
  name: string;
  level: number;
  color: string;
}

// Define skills for 3D visualization
const skills3d: Skill3D[] = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
  { name: "Framer Motion", level: 82, color: "#BB22AA" },
  { name: "Node.js", level: 87, color: "#339933" },
  { name: "Express", level: 85, color: "#000000" },
];

// Component for each skill sphere
const SkillSphere: React.FC<{ skill: Skill3D }> = ({ skill }) => {
  // Calculate random position
  const position = [
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5
  ] as [number, number, number];

  // Scale based on skill level
  const scale = 0.5 + (skill.level / 100) * 0.5;

  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={skill.color} />
      <Html position={[0, 1.5, 0]} center distanceFactor={10}>
        <div style={{
          fontSize: '12px',
          padding: '6px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: '4px',
          color: 'white',
          textAlign: 'center',
          pointerEvents: 'none',
          width: 'max-content'
        }}>
          {skill.name}
        </div>
      </Html>
    </mesh>
  );
};

// Main scene component
const SkillsScene: React.FC = () => {
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
      {skills3d.map((skill, index) => (
        <SkillSphere key={index} skill={skill} />
      ))}
    </>
  );
};

// Main component export
const Skills3D: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[500px] rounded-xl overflow-hidden"
    >
      <Canvas dpr={[1, 2]} shadows>
        <SkillsScene />
      </Canvas>
    </motion.div>
  );
};

export default Skills3D;
