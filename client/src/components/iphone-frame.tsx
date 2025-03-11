import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const IPhoneFrame = ({ children, className }: IPhoneFrameProps) => {
  return (
    <div className={cn("perspective-[1000px]", className)}>
      <motion.div
        initial={{ rotateY: -20, rotateX: 10 }}
        animate={{ rotateY: -20, rotateX: 10 }}
        className="relative w-[300px] h-[600px] mx-auto rounded-[50px] border-[14px] border-gray-900 bg-gray-800 transform-style-preserve-3d shadow-[0_0_0_1px_#666,0_0_30px_rgba(0,0,0,0.3)] overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-[20px] z-20 flex justify-center">
          <div className="w-20 h-4 bg-gray-900 rounded-b-[16px] flex items-center justify-center">
            <div className="w-12 h-2 bg-gray-800 rounded-full" />
          </div>
        </div>

        {/* Side Button */}
        <div className="absolute right-[-17px] top-20 w-[3px] h-8 bg-gray-900 rounded-r-lg" />
        <div className="absolute right-[-17px] top-32 w-[3px] h-8 bg-gray-900 rounded-r-lg" />
        <div className="absolute left-[-17px] top-24 w-[3px] h-12 bg-gray-900 rounded-l-lg" />

        {/* Screen Content */}
        <div className="absolute inset-0 bg-white overflow-hidden rounded-[35px]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
