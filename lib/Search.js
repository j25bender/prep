import React from 'react'
import App from './App'
import '../styles/Search.scss'

export default class Search extends React.Component {
    constructor() {
        super();
    
        this.state = {
            searchInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);        
    }


    handleInputChange(e) {
        this.setState({
            searchInput: e.target.value,
        })
    }
    
    handleKeyPress(e) {        
        if(e.key === 'Enter') {
            e.preventDefault();
            this.handleBtnClick();
        }        
    }

    handleBtnClick() {
        // this.props.searchValue( this.state.searchInput )
        this.setState({ searchInput: this.state.searchInput })
        localStorage.setItem('searchInput', this.state.searchInput);
    }

    render() {
        return(
            <div className="searchContainer">
                <input id="searchInput"
                       type="search"
                       placeholder="Search"
                       value={ this.state.searchInput }
                       onChange={ this.handleInputChange }
                       onKeyPress={ this.handleKeyPress }
                />
            </div>
        )
    }
}