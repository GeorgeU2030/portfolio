import { motion } from 'framer-motion'
import { GradientText } from '../GradientText'
import { Card3D } from '../Card3D'
import { skills } from '../../utils/icons'

export const Skills = () => {
  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[#FFFFFF]" />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <GradientText className="text-4xl md:text-5xl font-bold text-center">
          Technical Arsenal
        </GradientText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, icons], i) => ( 
            <Card3D key={i}>
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-96 border border-t-[#0894ff] border-l-[#c959dd] border-b-[#ff2e54] border-r-[#ff9004]"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold text-black mb-6">{category}</h3>
                <div className="grid grid-cols-5 gap-4">
                  {icons.map((icon, j) => (
                    <img 
                    key={j} 
                    src={icon} 
                    alt={icon} 
                    className="w-12 h-12 block object-contain"
                    />
                  ))}
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </motion.section>
  )
}