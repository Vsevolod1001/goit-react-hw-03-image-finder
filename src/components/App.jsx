import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
const API_KEY = '24451027-294a199a6fff21fcc9d265d96';
const BASE_URL = 'https://pixabay.com/api/';
class App extends Component {
  state = {
    searchResults: '',
    images: [],
  }
  
   componentDidUpdate (prevProps, prevState) {
        const nextName = this.state.searchResults;
        // console.log('prevState.searchResults', prevState.searchResults)
        // console.log('this.state.searchResults', this.state.searchResults)
        if (prevState.searchResults !== nextName) {  
           fetch(`${BASE_URL}?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(images => this.setState({images: images.hits}))
    }
   }
  hendleSearchbarSubmit = searchResults => {
    this.setState({searchResults})
  }
  render () {
    return (
    <>
      <Searchbar onSubmit={this.hendleSearchbarSubmit}/>
      <ImageGallery images={this.state.images}/>
    </>
    )
  }
}
export default App
