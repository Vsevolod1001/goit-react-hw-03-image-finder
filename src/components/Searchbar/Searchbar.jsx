import React, {Component} from "react";
import { SearchbarHeader, SearchForm, SearchFormInput, SearchFormBtn, SearchFormBtnLabel } from "./Searchbar.styled";

class Searchbar extends Component {
  state = {
    searchPic: '',
  }
  hendleChangeName = e => {
    this.setState({searchPic: e.currentTarget.value})
  }
  hendleSubmit = e => {
    e.preventDefault();
    if (this.state.searchPic.trim() === '') {
      alert('введите название поиска')
      return;
    }
    this.props.onSubmit(this.state.searchPic)
    this.setState({searchPic: ''});
  }

  render () {
    const { searchPic } = this.state;
    
    return (
      <SearchbarHeader>
      <SearchForm onSubmit={this.hendleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput          
          type="text"
          autocomplete="off"
          // autofocus
          value={searchPic}
          onChange={this.hendleChangeName}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
    );
  }
}
export default Searchbar;