import React from 'react'
import '../styles/CreateCard.scss'


export default class CreateCard extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            body: '',
            cardList: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEvent = this.handleEvent.bind(this);      
        this.setLocalStorage = this.setLocalStorage.bind(this);              
    }

    handleInputChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    handleEvent(e) {
        if(e.key === 'Enter'){
            this.setLocalStorage();
        }
    }

    setLocalStorage() {
        this.state.cardList.push({title: this.state.title,
                                  body: this.state.body,
                                  quality: 'swill'
                                });
        // this.setState({ title: this.state.title,
        //                 body: this.state.body
        //               })
        // localStorage.setItem('title', this.state.title )
        // localStorage.setItem('body', this.state.body )
        localStorage.setItem('cardList', JSON.stringify(this.state.cardList) )
        this.setState({ cardList: this.state.cardList })
        console.log(this.state.cardList)
        
        console.log(localStorage.cardList)
    }
    
    render() {
        return(
            <div className="createCard">
                <h1 className="appTitle">idea<span>Box</span></h1>
                <input className="newTitle" type="text" placeholder="Title" onKeyPress={ this.handleEvent } 
                value={ this.state.title } onChange={ this.handleInputChange } name="title" />
                <input className="newBody" type="text" placeholder="Body" onKeyPress={ this.handleEvent } 
                value={ this.state.body } onChange={ this.handleInputChange } name="body" />
                <button className="save" onClick={ this.handleEvent }>save</button>
            </div>
        )
    }
}
