import React from 'react'
import Card from './Card'

export default class CardList extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className="cardList">
                {
                    this.props.ideas.map( (idea, i) => 
                        <Card key={ i } title={ idea.title } body={ idea.body } /> )
                }
            </div>
        )
    }
}
