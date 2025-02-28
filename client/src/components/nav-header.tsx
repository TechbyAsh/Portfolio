import { motion } from "framer-motion";
import { Link } from "wouter";

export const NavHeader = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">AppCreator</a>
        </Link>
        <div className="flex gap-8">
          <Link href="#about">
            <a className="hover:text-primary transition-colors">About</a>
          </Link>
          <Link href="#projects">
            <a className="hover:text-primary transition-colors">Projects</a>
          </Link>
          <Link href="#contact">
            <a className="hover:text-primary transition-colors">Contact</a>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};
