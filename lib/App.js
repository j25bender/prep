import React from 'react'
import CreateCard from './CreateCard'
import Search from './Search'
import CardList from './CardList'
// import '../styles/App.scss '


export default class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
            cardList: []
        }
        this.updateIdeaArr = this.updateIdeaArr.bind(this)
    }

    updateIdeaArr(idea) {
        const addIdea = [idea, ...this.state.cardList]

        this.setState({
            cardList: addIdea
        })
    }

    render() {
        return (
            <div>
                <CreateCard ideas={ this.state.cardList } updateIdeaArr={ this.updateIdeaArr }/>
                <CardList ideas={ this.state.cardList }/>
            </div>
        )
    }
}