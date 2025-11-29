import { Link } from "wouter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";

export default function Home() {
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
              <Link href="/about"><a className="text-gray-700 hover:text-primary transition-colors">About Me</a></Link>
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
        {/* Hero Section */}
        <section className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello and welcome!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            My name is <span className="font-semibold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">Ashley Johnson</span> and I'm a Mobile App Developer based in [Your Location]. 
            I'm passionate about creating thoughtful and visually stunning digital experiences that users love. 
            I specialize in building beautiful, functional mobile applications that make a difference.
          </p>
        </section>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* About Me Card */}
          <Link href="/about">
            <a className="group block p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Know more about me
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Passionate developer. I love writing beautiful code and discussing innovative solutions.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          </Link>

          {/* Resume Card */}
          <Link href="/resume">
            <a className="group block p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                View my resume
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Design and deliver innovative mobile solutions with cutting-edge technologies and best practices.
              </p>
              <div className="flex items-center text-primary font-medium">
                View resume <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          </Link>

          {/* Portfolio Card */}
          <Link href="/portfolio">
            <a className="group block p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Check out my work
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                I focus my efforts on mobile app development, UI/UX design, and creating seamless user experiences.
              </p>
              <div className="flex items-center text-primary font-medium">
                View portfolio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          </Link>

          {/* Contact Card */}
          <Link href="/contact">
            <a className="group block p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Contact me for your requirement
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Contact me if your requirement meets my knowledge and services. Let's build something amazing together.
              </p>
              <div className="flex items-center text-primary font-medium">
                Get in touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          </Link>
        </div>

        {/* Social Links Section */}
        <section className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with me</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>View me on LinkedIn</span>
            </a>
            <a 
              href="https://github.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <Github className="w-5 h-5" />
              <span>Follow me on GitHub</span>
            </a>
            <a 
              href="https://twitter.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <Twitter className="w-5 h-5" />
              <span>Follow me on Twitter</span>
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Email me</span>
            </a>
          </div>
        </section>
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