import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

export const ProjectCard = ({ title, description, image, category, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img src={image} alt={title} className="w-full aspect-[4/3] object-cover" />
          <div className="p-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {category}
            </p>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
