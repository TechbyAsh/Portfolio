import { useState } from "react";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ProjectCarousel } from "@/components/project-carousel";
import { CaseStudy } from "@/components/case-study";
import { ContactForm } from "@/components/contact-form";
import { NavHeader } from "@/components/nav-header";
import { SkillProgress } from "@/components/skill-progress";
import Skills3D from "@/components/skills-3d"; // Assuming this component is defined elsewhere


const projects = [
  {
    id: 1,
    title: "Health & Fitness App",
    description: "A comprehensive fitness tracking application with personalized workout plans",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
    category: "Mobile App Development",
    challenge: "Creating an intuitive user experience for tracking workouts and nutrition",
    solution: "Implemented a clean, gesture-based interface with real-time progress tracking",
    results: "300% increase in user engagement and 4.8/5 App Store rating",
    gallery: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase"],
    mockupImage: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
  },
  {
    id: 2,
    title: "Food Delivery Platform",
    description: "Real-time food ordering and delivery tracking application",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
    category: "Mobile App Development",
    challenge: "Building a reliable real-time order tracking system",
    solution: "Developed a scalable backend with WebSocket integration",
    results: "Processed over 100,000 orders in first month",
    gallery: [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
    ],
    techStack: ["Flutter", "Dart", "Express.js", "PostgreSQL", "WebSocket"],
    mockupImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen">
      <GradientBackground />
      <NavHeader />

      <main className="container mx-auto px-4 pt-32">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute -z-10 w-64 h-64 rounded-full bg-primary/5 top-0 left-1/4 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />

          <motion.div 
            className="absolute -z-10 w-72 h-72 rounded-full bg-blue-500/5 bottom-0 right-1/4 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
              rotate: [0, -15, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Main content with staggered animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 inline-block"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3
              }}
            >
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Crafting Beautiful
              </motion.span>
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Mobile Experiences
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              I'm a mobile app developer passionate about creating thoughtful and visually stunning
              digital experiences that users love.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-primary/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <ProjectCarousel
            projects={projects.map(project => ({
              ...project,
              onClick: () => setSelectedProject(project)
            }))}
          />
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
          {/* Skills section */}
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I've worked with a range of technologies in the mobile app development world,
                from back-end to design.
              </p>
            </motion.div>

            {/* 3D Skills Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-xl font-medium text-center mb-6">Interactive Skills Globe</h3>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl shadow-xl">
                <Skills3D />
              </div>
            </motion.div>

            {/* Regular Skills Progress Bars */}
            <SkillProgress />
          </section>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
          <ContactForm />
        </motion.section>
      </main>

      {selectedProject && (
        <CaseStudy
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          challenge={selectedProject.challenge}
          solution={selectedProject.solution}
          results={selectedProject.results}
          images={selectedProject.gallery}
          techStack={selectedProject.techStack}
          mockupImage={selectedProject.mockupImage}
        />
      )}
    </div>
  );
}