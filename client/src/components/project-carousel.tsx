import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IPhoneFrame } from "./iphone-frame";
import { ProjectCard } from "./project-card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      if (document.hidden) return; // Don't scroll when tab is not visible
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [emblaApi]);

  return (
    <div className="relative flex justify-center items-center py-10">
      <IPhoneFrame>
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="flex-[0_0_100%] min-w-0 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full p-4">
                  <ProjectCard {...project} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </IPhoneFrame>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};