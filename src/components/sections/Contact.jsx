import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card3D } from '../Card3D'
import { Modal } from '../Modal'
import { contacts } from '../../utils/contacts'

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='flex justify-center'>
      <motion.section 
        className="py-20 relative w-3/4 my-4 rounded-xl"
        style={{
          background: 'linear-gradient(to bottom right, #0096FF, #BB64FF, #F55273)'
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl" />
        
        <div className="relative z-10 w-4/5 lg:w-3/5 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Let's Connect
          </h2>
          
          <p className="text-white/80 mb-12 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contacts.map((item, i) => (
              <Card3D key={i}>
                {item?.description ? (
                  <motion.a
                    href={item.href}
                    onClick={item.onClick}
                    className="group flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-colors h-56"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full p-2">
                      <img src={item.icon} alt={item.text} className="w-8 h-8" />
                    </div>
                    <span className="text-white font-medium text-lg">{item.text}</span>
                    <span className="text-white/60 text-sm">{item.description}</span>
                  </motion.a>
                ) : (
                  <motion.div
                    onClick={() => setIsModalOpen(true)}
                    className="group flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-colors h-56 cursor-pointer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full p-2">
                      <img src={item.icon} alt={item.text} className="w-8 h-8" />
                    </div>
                    <span className="text-white font-medium text-lg">{item.text}</span>
                    <img src="/myemail.svg" alt="email" className="bg-white rounded-xl w-full" />
                  </motion.div>
                )}
              </Card3D>
            ))}
          </div>
        </div>
      </motion.section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img 
          src="/myemail.svg" 
          alt="email" 
          className="max-w-full h-auto"
          style={{ maxHeight: '80vh' }} 
        />
      </Modal>
    </div>
  )
}