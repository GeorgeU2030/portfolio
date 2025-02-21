import { motion } from 'framer-motion'
import { GradientText } from '../GradientText'
import { TypewriterText } from '../TypeWriter'
import { Card3D } from '../Card3D'

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center lg:px-4">
        <GradientText className="text-4xl md:text-7xl font-bold mb-6 text-center">
          George Trujillo
        </GradientText>
        
        <div className="max-w-11/12 lg:max-w-1/2 mx-auto text-center">
          <TypewriterText text="Crafting Elegant & Intuitive Digital Solutions with Precision" />
          <div className='px-4 py-2 rounded-lg inline-block text-center'>
            Hi, I'm George, a passionate Full-Stack Developer and Software Engineering from Icesi University. 
            I enjoy crafting solutions, enhancing user experiences, and continually expanding my knowledge. 
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {['./mytho.webp', './command.webp', './clover.webp'].map((icon, i) => (
            <Card3D key={i}>
              <motion.img
                src={icon}
                alt="icon"
                className="rounded-xl bg-white/10 p-3 backdrop-blur-lg border-1 border-t-[#0894ff] border-l-[#c959dd] border-b-[#ff2e54] border-r-[#ff9004]"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                }}
                width={80}
                height={80}
              />
            </Card3D>
          ))}
        </motion.div>
      </div>
    </div>
  )
}