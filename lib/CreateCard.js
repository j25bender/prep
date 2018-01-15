import React from 'react'
import '../styles/CreateCard.scss'

function CreateCard() {
    return(
        <div className="createCard">
            <h1 className="appTitle">idea<span>Box</span></h1>
            <input className="newTitle" placeholder="Title" />
            <input className="newBody" placeholder="Body" />
            <button className="save">save</button>
        </div>
    )
}

export default CreateCard;