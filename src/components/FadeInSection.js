import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("onscreen");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  const objects = {
    offscreen: {
      opacity: 0,
      y: 300,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="offscreen"
        animate={controls}
        variants={objects}
        exit="offscreen"
      >
        <div className="object">{props.children}</div>
      </motion.div>
    </div>
  );
};

export default FadeInSection;
