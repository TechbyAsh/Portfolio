import { Link } from "wouter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <GradientBackground />
      
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
                Ashley Johnson
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-gray-700 hover:text-primary transition-colors">Home</a></Link>
              <Link href="/about"><a className="text-gray-700 hover:text-primary transition-colors font-semibold">About Me</a></Link>
              <Link href="/resume"><a className="text-gray-700 hover:text-primary transition-colors">Resume</a></Link>
              <Link href="/portfolio"><a className="text-gray-700 hover:text-primary transition-colors">Portfolio</a></Link>
              <Link href="/contact"><a className="text-gray-700 hover:text-primary transition-colors">Contact</a></Link>
            </div>
            <Link href="/contact">
              <a className="hidden md:block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                I'm available
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <Link href="/">
          <a className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 md:p-12 space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Hi! I'm <span className="font-semibold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">Ashley Johnson</span>, 
              a passionate mobile app developer with a love for creating beautiful, functional, and user-friendly applications.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience in mobile development, I specialize in building cross-platform applications 
              that deliver exceptional user experiences. I believe that great design and clean code go hand in hand, 
              and I'm committed to delivering solutions that not only look amazing but also perform flawlessly.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve real-world problems through 
              technology. I'm constantly learning new technologies and best practices to stay at the forefront of 
              mobile development.
            </p>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">What I Do</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mobile App Development (iOS & Android)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>UI/UX Design & Prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cross-Platform Development with React Native & Flutter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Backend Integration & API Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>App Performance Optimization</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <p className="text-gray-600 leading-relaxed">
                I believe in a user-first approach to development. Every project starts with understanding the 
                user's needs and pain points, then crafting solutions that are intuitive, accessible, and delightful 
                to use. I'm a strong advocate for clean code, thorough testing, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ashley Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
