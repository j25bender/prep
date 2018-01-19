import React from 'react'
import '../styles/Card.scss'

export default class Card extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="card">
                <h3 className="title">{ this.props.title }</h3>
                <button className="delete">X</button>
                <h6 className="body">{ this.props.body }</h6>
                <button className="upVote">+</button>
                <button className="downVote">-</button>
                <h6 className="quality">quality: { this.props.quality }</h6>
            </div>
        )
    }
}