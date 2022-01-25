import React from "react"
import { ImageGalleryItemLi, ImageGalleryItemImg } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({id, largeUrl, toggleMod, srcSmall, srcLarge}) => {
  return (
    <ImageGalleryItemLi id={id}>
       <ImageGalleryItemImg 
       onClick={() => {
        toggleMod();
        largeUrl(srcLarge);
        }}
       src={srcSmall} 
       alt='' />
    </ImageGalleryItemLi>
  );
}
export default ImageGalleryItem

