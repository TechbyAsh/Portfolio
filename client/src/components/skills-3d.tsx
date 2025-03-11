
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Vector3, MathUtils } from 'three';
import { SiReact, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress } from "react-icons/si";

// Define the skill data structure
interface Skill3D {
  name: string;
  level: number; // 0-100
  color: string;
  position: [number, number, number];
}

// Our skills array with position information for 3D space
const skills3d: Skill3D[] = [
  { name: "React", level: 90, color: "#61DAFB", position: [0, 0, 0] },
  { name: "TypeScript", level: 85, color: "#3178C6", position: [-2, 1, -1] },
  { name: "Tailwind CSS", level: 88, color: "#06B6D4", position: [2, -1, -1] },
  { name: "Framer Motion", level: 82, color: "#BB22AA", position: [-1, -2, 1] },
  { name: "Node.js", level: 87, color: "#339933", position: [1, 2, 1] },
  { name: "Express", level: 85, color: "#000000", position: [0, -1, 2] },
];

// A single skill sphere component
const SkillSphere = ({ skill }: { skill: Skill3D }) => {
  const { name, level, color, position } = skill;
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Calculate size based on skill level (0.5 to 1.2)
  const size = MathUtils.mapLinear(level, 0, 100, 0.5, 1.2);
  
  // Add subtle animation to each sphere
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.004;
      
      // Add subtle floating motion
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.2} // Rotation intensity
      floatIntensity={0.5} // Float intensity
    >
      <mesh
        ref={meshRef}
        position={new Vector3(...position)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
        <Text
          position={[0, size + 0.3, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
        <Text
          position={[0, size - 0.3, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {level}%
        </Text>
      </mesh>
    </Float>
  );
};

// The scene component that holds all skill spheres
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

export const Skills3D = () => {
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
