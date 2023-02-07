import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimationTransition = ({ children }: { children: ReactNode }) => {
    const routeAnimation = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
            opacity: 1,
            transition: {
                duration : 0.9,
                ease: [0.55,1,0.15,1]
            }
        }
    }
    return (
        <div className="absolute">
            <motion.div 
                initial="initial"
                animate="animate"
                variants={routeAnimation}
                className="relative bg-light w-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default AnimationTransition;
