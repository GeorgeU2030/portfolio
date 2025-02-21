import { motion } from "framer-motion";

export const GradientText = ({ children, className }) => {
  return (
    <motion.h1 
      className={`relative font-bold animate-gradient ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
                background: '#1d1d1f',
                backgroundImage: 'linear-gradient(108deg, #0894ff, #c959dd 34%, #ff2e54 68%, #ff9004)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone',
                lineHeight: '1.2',
                paddingBottom: '0.2em',
              }}
    >
      {children}
    </motion.h1>
  );
};