import './UnderConstruction.css';
import { motion } from 'framer-motion';

const Works = () => {
 const containerVariants = {
    animate: {
      transition: {
        duration:10,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  const messageVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <div className="containerwork">
      <motion.div
        className="wrapperwork"
        variants={containerVariants}
        animate="animate"
      >
        <motion.h1 variants={messageVariants} initial="initial" animate="animate">
          This page is under construction
        </motion.h1>
        <motion.p variants={messageVariants} initial="initial" animate="animate">
          Please check back soon!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Works;
