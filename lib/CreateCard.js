import React from 'react'
import '../styles/CreateCard.scss'

function CreateCard() {
    return(
        <div className="createCard">
            <h1 className="appTitle">ideaBox</h1>
            <input className="newTitle" />
            <input className="newBody" />
            <button className="submit">Submit</button>
        </div>
    )
}

export default CreateCard;