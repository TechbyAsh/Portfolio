import { useState } from "react";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ProjectCarousel } from "@/components/project-carousel";
import { CaseStudy } from "@/components/case-study";
import { ContactForm } from "@/components/contact-form";
import { NavHeader } from "@/components/nav-header";

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting Beautiful
            <br />
            Mobile Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a mobile app developer passionate about creating thoughtful and visually stunning
            digital experiences that users love.
          </p>
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
        />
      )}
    </div>
  );
}