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
      className="cursor-pointer h-full"
      onClick={onClick}
    >
      <Card className="overflow-hidden bg-white h-full rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none">
        <CardContent className="p-0 h-full flex flex-col">
          <img src={image} alt={title} className="w-full aspect-[16/9] object-cover" />
          <div className="p-4 flex-1 flex flex-col">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 bg-primary/5 inline-block px-2 py-1 rounded-full self-start">
              {category}
            </p>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};