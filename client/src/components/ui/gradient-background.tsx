import { motion } from "framer-motion";

export const GradientBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10 h-full w-full bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-200 opacity-50 blur-[80px]"
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
        className="absolute left-0 top-[30%] h-[400px] w-[400px] rounded-full bg-pink-200 opacity-50 blur-[80px]"
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
    </motion.div>
  );
};
