import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IPhoneFrame } from "./iphone-frame";
import { useState } from "react";

interface CaseStudyProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
  techStack?: string[]; // Added tech stack
  mockupImage?: string; // Added mockup for iPhone frame
}

export const CaseStudy = ({
  open,
  onClose,
  title,
  description,
  challenge,
  solution,
  results,
  images,
  techStack = [],
  mockupImage,
}: CaseStudyProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column with iPhone frame */}
            <div className="flex items-center justify-center">
              <IPhoneFrame>
                <img 
                  src={mockupImage || images[0]} 
                  alt={`${title} mockup`}
                  className="w-full h-full object-cover"
                />
              </IPhoneFrame>
            </div>

            {/* Right column with project details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">{description}</p>
              </motion.div>

              {techStack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Project images with zoom functionality */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-zoom-in"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-md w-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Click to zoom</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Zoomed image modal */}
          {selectedImage && (
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Zoomed view"
                  className="w-full h-full object-contain"
                  onClick={() => setSelectedImage(null)}
                />
              </DialogContent>
            </Dialog>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2">Challenge</h3>
            <p className="text-muted-foreground">{challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p className="text-muted-foreground">{solution}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-lg font-semibold mb-2">Results</h3>
            <p className="text-muted-foreground">{results}</p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};