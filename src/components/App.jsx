import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { Watch  } from "react-loader-spinner";

const API_KEY = '24451027-294a199a6fff21fcc9d265d96';
const BASE_URL = 'https://pixabay.com/api/';
class App extends Component {
  state = {
    searchResults: '',
    images: [],
    showModal: false,
    largeImages: '',
    isLoad: false,
    page: 1,
  }
  
   componentDidUpdate (prevProps, prevState) {
        const nextName = this.state.searchResults;
        // console.log('prevState.searchResults', prevState.searchResults)
        // console.log('this.state.searchResults', this.state.searchResults)
        if (prevState.searchResults !== nextName) {  
          this.setState({isLoad: true})
           fetch(`${BASE_URL}?q=${nextName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(images => this.setState({images: images.hits}))
        .finally(() => this.setState({isLoad: false}))
      
    }
   }
  hendleSearchbarSubmit = searchResults => {
    this.setState({searchResults})
  }
  hendleLargeImages = largeImages => {
    this.setState({largeImages})
  }
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  };
  hendleClickLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }))
  }
  render () {
    return (
    <>
      <Searchbar onSubmit={this.hendleSearchbarSubmit}/>
      {this.state.isLoad && (
        <Watch 
          heigth="100"
          width="100"
          color="#5e3a7a"        
          ariaLabel="loading-indicator"
        />
      )}
      <ImageGallery 
      images={this.state.images}
      toggleM={this.toggleModal}
      largeUrl={this.hendleLargeImages}
      
      />
      {this.state.images.length > 0 && <Button onClick={this.hendleClickLoadMore}/>}
      {this.state.showModal && <Modal 
      onClose={this.toggleModal} 
      srsLarge={this.state.largeImages}/>}
      
    </>
    )
  }
}
export default App
