import React from "react"

const ImageGalleryItem = ({img}) => {
  const { tags, webformatURL } = img;
  
  return (
    <li >
       <img src={webformatURL} alt={tags} />
    </li>
  );
}
export default ImageGalleryItem

// className="gallery-item"