import { Link } from "wouter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Health & Fitness App",
    description: "A comprehensive fitness tracking application with personalized workout plans and nutrition tracking",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800",
    tech: ["React Native", "TypeScript", "Firebase"],
    link: "#"
  },
  {
    id: 2,
    title: "Food Delivery Platform",
    description: "Real-time food ordering and delivery tracking application with seamless user experience",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800",
    tech: ["Flutter", "Dart", "Node.js"],
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce Mobile App",
    description: "Modern shopping app with advanced filtering, wishlist, and secure payment integration",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    tech: ["React Native", "Redux", "Stripe"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing multiple social media accounts in one place",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tech: ["Flutter", "GraphQL", "AWS"],
    link: "#"
  }
];

export default function Portfolio() {
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
              <Link href="/portfolio"><a className="text-gray-700 hover:text-primary transition-colors font-semibold">Portfolio</a></Link>
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

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-12">
            A selection of projects I've worked on, showcasing my skills in mobile app development
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
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
