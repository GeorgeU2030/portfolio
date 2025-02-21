// src/App.jsx
import { Suspense } from 'react'
import { lazyLoad } from './utils/lazyload'
import { ProgressBar } from './components/layout/ProgressBar'
import { Hero } from './components/sections/HeroSection'

const Projects = lazyLoad('Projects')
const Skills = lazyLoad('Skills')
const Contact = lazyLoad('Contact')

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <ProgressBar />
      <Hero /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default App