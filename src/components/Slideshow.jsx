import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={images[currentIndex]}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img
            className="carouselimg"
            src={images[currentIndex]}
            alt="loda lele"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// export default Slideshow;
