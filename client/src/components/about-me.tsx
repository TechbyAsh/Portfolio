import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define the type for skill pills
type Highlight = {
  text: string;
  color: string;
};

export const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Highlights/keywords you want to emphasize
  const highlights: Highlight[] = [
    { text: "Mobile Apps", color: "primary" },
    { text: "UI/UX", color: "blue-500" },
    { text: "React Native", color: "cyan-500" },
    { text: "Swift", color: "orange-500" },
    { text: "Flutter", color: "indigo-500" },
  ];

  // Short paragraphs about you
  const paragraphs = [
    "I'm a passionate mobile developer dedicated to crafting elegant, user-friendly applications that solve real-world problems.",
    "With expertise in both iOS and Android development, I bring a holistic approach to every project.",
    "I believe that the best apps combine beautiful design with intuitive functionality, creating experiences that users love."
  ];

  return (
    <motion.div 
      ref={ref}
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute -z-10 w-64 h-64 rounded-full bg-primary/5 -top-20 -left-20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <motion.div 
        className="absolute -z-10 w-72 h-72 rounded-full bg-blue-500/5 -bottom-20 -right-20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="backdrop-blur-md bg-white/5 p-8 sm:p-12 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] border border-white/10">
        {/* Photo and content side by side on larger screens */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Animated Avatar */}
          <motion.div 
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Animated gradient border */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-500 to-cyan-500 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="bg-slate-900 h-full w-full rounded-full relative overflow-hidden">
                {/* Animated character */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ y: 10 }}
                  animate={{ y: [-8, 8, -8] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Black girl avatar emoji */}
                  <span className="text-8xl scale-125">👩🏾‍💻</span>
                </motion.div>

                {/* Animated sparkles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 35}%`
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* About me content */}
          <div className="flex-1">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h2>

            {/* Paragraphs with staggered animation */}
            <div className="space-y-4 mb-6 text-muted-foreground">
              {paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Highlights/keywords */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {highlights.map((highlight, index) => (
                <motion.span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-${highlight.color}/10 text-${highlight.color} cursor-pointer`}
                  whileHover={{ scale: 1.05, backgroundColor: `var(--${highlight.color})`, color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={hoveredIndex === index ? { y: -5 } : { y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {highlight.text}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};