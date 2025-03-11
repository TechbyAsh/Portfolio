
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';

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

// Simple sphere component without using drei
const SkillSphere = ({ index, skill }: { index: number; skill: Skill3D }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Calculate position based on index to spread skills in a circle
  const radius = 3;
  const angle = (index / skills3d.length) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Simple hover animation
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() + index) * 0.3;
      // Rotate each sphere
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  // Scale based on skill level
  const scale = 0.3 + (skill.level / 100) * 0.3;

  return (
    <mesh 
      ref={meshRef} 
      position={[x, 0, z]} 
      scale={[scale, scale, scale]}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={skill.color} roughness={0.3} metalness={0.8} />
    </mesh>
  );
};

// Main scene component with lighting and controls
const SkillsScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Slowly rotate the entire group of spheres
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />
      
      <group ref={groupRef}>
        {skills3d.map((skill, index) => (
          <SkillSphere key={index} index={index} skill={skill} />
        ))}
      </group>
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
      className="w-full h-[500px] rounded-xl overflow-hidden bg-gray-900"
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <SkillsScene />
      </Canvas>
    </motion.div>
  );
};

export default Skills3D;
