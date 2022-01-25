import React from "react"
import ImageGalleryItem from "../ImageGalleryItem"

const ImageGallery = ({images}) => {
  return (
    <ul >
        {images.map(image => (
          <ImageGalleryItem 
          key={image.id}
          img={image}
          />
        ))}
    </ul>
  )
}
export default ImageGallery

// className="gallery"