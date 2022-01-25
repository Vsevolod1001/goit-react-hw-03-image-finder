import React from "react"
import { ImageGalleryUl } from "./ImageGallery.styled"
import ImageGalleryItem from "../ImageGalleryItem"

const ImageGallery = ({images, toggleM, largeUrl}) => {
  return (
    <ImageGalleryUl>
        {images.map(({id, webformatURL, largeImageURL}) => (
          <ImageGalleryItem 
          largeUrl={largeUrl}
          toggleMod={toggleM}
          key={id}
          srcSmall={webformatURL}
          srcLarge={largeImageURL}
          />
        ))}
    </ImageGalleryUl>
  )
}
export default ImageGallery

