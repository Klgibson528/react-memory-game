import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    render() {
        let memoryCardInnerClass = "MemoryCardInner"
        if (this.props.isFlipped) {
            memoryCardInnerClass += " flipped"
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack"><img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="DigitalCrafts Logo" /></div>
                    <div className="MemoryCardFront">{this.props.symbol}</div>
                </div>
            </div>
        )
    }

}

export default Card;