import { motion } from 'framer-motion'
import { Card3D } from './Card3D'
import { OptimizedImage } from './Image'

export const ProjectCard = ({ project }) => {
  return (
    <Card3D>
      <motion.div 
        className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-t-[#0894ff] border-l-[#c959dd] border-b-[#ff2e54] border-r-[#ff9004]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative h-48">
          <OptimizedImage 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
              width={400}
              height={192}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="p-6">
          <div className='flex justify-between'>
            <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
            <div className="flex gap-3 mb-4">
            {project.icons.map((icon, j) => (
              <img 
                key={j} 
                src={icon} 
                alt={icon} 
                className="w-6 h-6 block object-contain"
              />
            ))}

            </div>
          </div>
          
          <p className='mb-2'>{project.description}</p>
          
          <motion.a
            href={project.link}
            className="inline-block py-2 px-4 bg-[#0096FF] rounded-full text-white font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
        </div>
      </motion.div>
    </Card3D>
  )
}