import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 font-Messiri animate-bounce-in ">
            ! الجواز بقى أونلاين
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroAnimation;
