import { useState, useEffect } from 'react'

export const OptimizedImage = ({ src, alt, className, width, height }) => {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setImageSrc(src)
  }, [src])

  return (
    <img
      src={imageSrc || ''} 
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy" 
    />
  )
}