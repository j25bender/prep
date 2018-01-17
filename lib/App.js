import React from 'react'
import CreateCard from './CreateCard'
import Search from './Search'
import cardList from './CardList'
// import '../styles/App.scss '


export default class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
            cardList: []
        }
    }

    render() {
        return (
            <div>
                <CreateCard ideas={ this.state.cardList }/>
                <Search searchValue='potato'/>
                <cardList />
            </div>
        )
    }

    componentDidMount() {
        let ideas = localStorage.getItem('cardList');
        console.log(ideas)
        
        if(ideas !== null) {
            this.getData();
        }
    }

    getData() {
        console.log(parsedData)
        this.setState({
            cardList: parsedData
        })
    }
}