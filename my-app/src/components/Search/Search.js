import React from 'react';
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      searchOption: 'https://api.datamuse.com/words?rel_rhy='
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchOption = this.handleSearchOption.bind(this);

    this.options = {
      'Rhymes With': 'https://api.datamuse.com/words?rel_rhy=',
      'Related To': 'https://api.datamuse.com/words?ml=',
      'Sounds Like': 'https://api.datamuse.com/words?sl=',
    };
  }

    getSearchOptionClass(option) {
      if (this.state.searchOption === option) {
        return 'active';
      }
      return '';
    }

    handleSearchOption(option) {
      this.setState({ searchOption: option});
    }

    handleTermChange(event) {
      this.setState({ word: event.target.value});
    }

    handleSearch(event) {
      this.props.searchDatamuse(this.state);
      event.preventDefault();
    }

    renderoptions() {
      return Object.keys(this.options).map(option => {
        let optionvalue = this.options[option];
        return (<li className={this.getSearchOptionClass(optionvalue)}
          key={optionvalue}
          onClick={this.handleSearchOption.bind(this, optionvalue)}>
            {option}
          </li>);
      });
    }
  

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-options">
          <ul>
            {this.renderoptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Word to search" onChange={this.handleTermChange} />
        </div>
        <div className="SearchBarSubmit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}



export default Search;
