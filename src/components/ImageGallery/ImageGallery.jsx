import React from "react"
import { ImageGalleryUl } from "./ImageGallery.styled"
import ImageGalleryItem from "../ImageGalleryItem"
import PropTypes from "prop-types";

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
ImageGallery.propTypes={
  images: PropTypes.array.isRequired,
  toggleM: PropTypes.func.isRequired,
  largeUrl: PropTypes.func.isRequired
}
export default ImageGallery

