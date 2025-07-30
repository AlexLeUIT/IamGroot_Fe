import { IKImage } from "imagekitio-react"

const Image = ({src, className, w, h, alt}) => {
  return (
     <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            src="https://ik.imagekit.io/flycody/logouitbamboo.png" 
            path={src}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            width={w}
            height={h}
            alt={alt} className={className}/>
  )
}

export default Image