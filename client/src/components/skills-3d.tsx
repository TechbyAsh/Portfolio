
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';

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

// Simpler sphere component
const SkillSphere = ({ index, skill }: { index: number, skill: Skill3D }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  // Calculate position based on index to create a circular pattern
  const angle = (index / skills3d.length) * Math.PI * 2;
  const radius = 3;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = Math.sin(index * 0.5) * 0.5; // Small vertical variation
  
  // Scale based on skill level
  const scale = 0.5 + (skill.level / 100) * 0.5;
  
  // Simple animation
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = y + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Sphere ref={ref} args={[scale, 16, 16]} position={[x, y, z]}>
        <meshStandardMaterial color={skill.color} />
      </Sphere>
      {/* Text labels are removed to simplify */}
    </group>
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
      {skills3d.map((skill, index) => (
        <SkillSphere key={index} index={index} skill={skill} />
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
      <Canvas>
        <SkillsScene />
      </Canvas>
    </motion.div>
  );
};

export default Skills3D;
