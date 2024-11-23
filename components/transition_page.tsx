"use client"

import { transitionVariantsPage } from "@/utils/motion_transition";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#211c4e]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.3, duration: 0.6, ease: "anticipate" }}

                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;