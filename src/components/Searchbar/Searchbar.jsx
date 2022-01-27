import React, {Component} from "react";
import { SearchbarHeader, SearchForm, SearchFormInput, SearchFormBtn } from "./Searchbar.styled";
import PropTypes from "prop-types";
import { FiSearch } from 'react-icons/fi';

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
          <span>
            <FiSearch />
          </span>
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
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,

}
export default Searchbar;