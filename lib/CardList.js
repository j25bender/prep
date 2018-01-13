import React from 'react'
import Card from './Card'

function CardList(props) {
    return(
        <div className="cardList">
            {
                props.ideas.map( (idea, index) => <Card index={ index } idea={ idea } /> )
            }
        </div>
    );
}

export default CardList;