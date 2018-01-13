import React from 'react'
import CreateCard from '../lib/CreateCard.js'
// import Search from './Search'
import CardList from './CardList'
// import '../styles/App.scss '


export default class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
            CardList: []
        }
    }

    render() {
        return (
            <div>
                <CreateCard /> 
                
            </div>
        )
    }

    componentDidMount() {
        let idea = localStorage.getItem('idea');

        if(idea !== null) {
            this.getData
        }
    }
}