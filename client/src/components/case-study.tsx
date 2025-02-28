import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CaseStudyProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
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
}: CaseStudyProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground">{description}</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-2">Challenge</h3>
            <p className="text-muted-foreground">{challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p className="text-muted-foreground">{solution}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-2">Results</h3>
            <p className="text-muted-foreground">{results}</p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
