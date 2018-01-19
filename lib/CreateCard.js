import React from 'react'
import Card from './Card'
import '../styles/CreateCard.scss'


export default class CreateCard extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            body: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveIdea = this.saveIdea.bind(this);        
    }

    handleInputChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    saveIdea() {
        const idea = { title: this.state.title, body: this.state.body }

        this.props.updateIdeaArr(idea)

        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return(
            <div className="createCard">
                <h1 className="appTitle">idea<span>Box</span><span>React</span></h1>

                <input className="newTitle" type="text" placeholder="Title"
                value={ this.state.title }
                onChange={ this.handleInputChange } name="title" />

                <input className="newBody" type="text" placeholder="Body"
                value={ this.state.body }
                onChange={ this.handleInputChange } name="body" />

                <button className="save" onClick={ this.saveIdea }>save</button>
            </div>
        )
    }
}
