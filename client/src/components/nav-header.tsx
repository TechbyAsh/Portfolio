import { motion } from "framer-motion";
import { Link } from "wouter";

export const NavHeader = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between bg-white/80 rounded-b-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur-sm">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity">
            <img 
              src="/assets/logo.png" 
              alt="Company Logo" 
              className="h-10 w-auto"
            />
          </a>
        </Link>
        <div className="flex gap-8">
          <Link href="#about">
            <a className="px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] transition-shadow">About</a>
          </Link>
          <Link href="#projects">
            <a className="px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] transition-shadow">Projects</a>
          </Link>
          <Link href="#skills">
            <a className="px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] transition-shadow">Skills</a>
          </Link>
          <Link href="#contact">
            <a className="px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] transition-shadow">Contact</a>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};