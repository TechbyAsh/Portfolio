import { Link } from "wouter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

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
          {/* Header with subtitle */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ashley Johnson</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Mobile App Developer • React Native • Flutter • UI/UX • Full Stack
            </h2>
          </div>
          
          {/* Work Experience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Work Experience <span className="text-gray-500 text-xl font-normal">(5+ years)</span></h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Senior Mobile Developer</h3>
                    <a href="#" className="text-primary hover:underline">Company Name</a>
                  </div>
                  <span className="text-gray-600">2021 - Present</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Led development of multiple cross-platform mobile applications using React Native and Flutter. 
                  Improved app performance by 40% through optimization techniques. Mentored junior developers and 
                  conducted code reviews. Collaborated with design team to implement pixel-perfect UIs.
                </p>
              </div>

              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Mobile Developer</h3>
                    <a href="#" className="text-primary hover:underline">Previous Company</a>
                  </div>
                  <span className="text-gray-600">2019 - 2021</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Developed and maintained iOS and Android applications. Integrated RESTful APIs and third-party services. 
                  Implemented responsive designs and ensured cross-platform compatibility. Participated in agile development 
                  processes and sprint planning.
                </p>
              </div>

              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Junior Developer</h3>
                    <a href="#" className="text-primary hover:underline">First Company</a>
                  </div>
                  <span className="text-gray-600">2018 - 2019</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Started career building web and mobile applications. Learned best practices in software development, 
                  version control, and team collaboration. Contributed to multiple client projects and internal tools.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                    <a href="#" className="text-primary hover:underline">University Name</a>
                  </div>
                  <span className="text-gray-600">2019</span>
                </div>
                <p className="text-gray-700">Graduated with honors (GPA: 3.8/4.0)</p>
              </div>
            </div>
          </section>

          {/* Key Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Skills</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <a href="#" className="text-gray-700 hover:text-primary hover:underline">Mobile App Development</a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <a href="#" className="text-gray-700 hover:text-primary hover:underline">UI/UX Design</a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <a href="#" className="text-gray-700 hover:text-primary hover:underline">Cross-Platform Development</a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <a href="#" className="text-gray-700 hover:text-primary hover:underline">API Integration</a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <a href="#" className="text-gray-700 hover:text-primary hover:underline">Performance Optimization</a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <a href="#" className="text-gray-700 hover:text-primary hover:underline">Agile Development</a>
              </li>
            </ul>
          </section>

          {/* Skill Sets */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Skill Sets</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary hover:underline font-medium">React Native (Expert)</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary hover:underline font-medium">Flutter (Proficient)</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary hover:underline font-medium">TypeScript/JavaScript (Expert)</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary hover:underline font-medium">Node.js/Express (Proficient)</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary hover:underline font-medium">Firebase/AWS (Intermediate)</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary hover:underline font-medium">Git/CI/CD (Proficient)</a>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </section>

          {/* Volunteer Work / Community */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Volunteer Work 
              <Link href="/portfolio">
                <a className="text-lg text-primary hover:underline ml-2">(view my portfolio)</a>
              </Link>
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                    Open Source Contributor (GitHub)
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                    Tech Blogger (Medium)
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                    Mentor (Code Newbie Community)
                  </a>
                </div>
              </li>
            </ul>
          </section>

          {/* Awards/Certifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Certifications 
              <Link href="/portfolio">
                <a className="text-lg text-primary hover:underline ml-2">(view all certs)</a>
              </Link>
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                    AWS Certified Developer - Associate
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                    Google Mobile Web Specialist
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary hover:underline">
                    Meta React Native Certification
                  </a>
                </div>
              </li>
            </ul>
          </section>
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
