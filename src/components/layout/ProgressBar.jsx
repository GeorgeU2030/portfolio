import { motion, useScroll, useSpring } from 'framer-motion'

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{ 
        scaleX,
        background: 'linear-gradient(108deg, #0894ff, #c959dd 34%, #ff2e54 68%, #ff9004)'
      }}
    />
  )
}