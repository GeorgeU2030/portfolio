import { motion } from 'framer-motion'
import { GradientText } from '../GradientText'
import { TypewriterText } from '../TypeWriter'
import { ProjectCard } from '../ProjectCard'
import { projectsTS, projectsPY, projectsC, projectsOther } from '../../utils/projects'

export const Projects = () => {
  return (
    <motion.section className="py-20 relative">
      <div className="absolute inset-0 bg-[#F5F5F7]" />
      
      <div className="relative z-10 w-full mx-auto flex flex-col items-center">
        <GradientText className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Projects
        </GradientText>
        
        {/* TypeScript Projects */}
        <div className='w-11/12 lg:w-full'>
          <TypewriterText text="Full Stack Power with TypeScript & JavaScript"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-2 md:px-0 w-11/12 lg:w-2/3">
          {projectsTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        
        {/* Python Projects */}
        <div className='w-11/12 lg:w-full mt-16'>
          <TypewriterText text="Interactive & Fun Projects with Python & Django"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-2 md:px-0 w-11/12 lg:w-2/3">
          {projectsPY.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        
        {/* C# Projects */}
        <div className='w-11/12 lg:w-full mt-16'>
          <TypewriterText text="Simulators and Chat with Angular & ASP.NET"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2 md:px-0 w-11/12 lg:w-3/4">
          {projectsC.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        
        {/* Other Projects */}
        <div className='w-11/12 lg:w-full mt-16 flex justify-center items-center'>
          <GradientText className="text-base md:text-2xl font-bold text-center mb-16">
            Always Experimenting Other Technologies ...
          </GradientText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-2 md:px-0 w-11/12 lg:w-2/3">
          {projectsOther.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}