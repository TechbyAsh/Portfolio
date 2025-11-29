import { Link } from "wouter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ArrowLeft, Download } from "lucide-react";

export default function Resume() {
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
              <Link href="/resume"><a className="text-gray-700 hover:text-primary transition-colors font-semibold">Resume</a></Link>
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-5xl md:text-6xl font-bold">Resume</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
          
          <div className="space-y-8">
            {/* Experience Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Senior Mobile Developer</h3>
                  <p className="text-primary font-medium">Company Name • 2021 - Present</p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>• Led development of multiple cross-platform mobile applications</li>
                    <li>• Improved app performance by 40% through optimization techniques</li>
                    <li>• Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Mobile Developer</h3>
                  <p className="text-primary font-medium">Previous Company • 2019 - 2021</p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>• Developed and maintained iOS and Android applications</li>
                    <li>• Collaborated with design team to implement pixel-perfect UIs</li>
                    <li>• Integrated RESTful APIs and third-party services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Mobile Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flutter</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">iOS</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Android</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Dart</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Swift</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Express</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Firebase</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Figma</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CI/CD</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Agile</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-primary font-medium">University Name • 2015 - 2019</p>
                <p className="mt-2 text-gray-600">Graduated with honors, focused on mobile and web development</p>
              </div>
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
