import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const GradientBackground = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create parallax effect based on mouse position
  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 h-full w-full bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating orbs with parallax effect */}
      <motion.div
        className="absolute right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-200 opacity-50 blur-[80px]"
        style={{ x: parallaxX, y: parallaxY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute left-[5%] top-[30%] h-[400px] w-[400px] rounded-full bg-pink-200 opacity-50 blur-[80px]"
        style={{ x: useTransform(parallaxX, v => v * -1), y: useTransform(parallaxY, v => v * -1) }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute right-[20%] bottom-[20%] h-[300px] w-[300px] rounded-full bg-blue-200 opacity-40 blur-[60px]"
        style={{ 
          x: useTransform(parallaxX, v => v * 0.5), 
          y: useTransform(scrollY, [0, 1000], [0, 200]) 
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
    </motion.div>
  );
};