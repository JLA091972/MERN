
import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personAge: this.props.personAge
        }

    }
    render() {
        return (
            <div>
                <h1>Person Info:</h1>
                <h4> Name: {this.props.personName} {this.props.lastName}</h4>
                <p> Age: {this.state.personAge}  <br />
                    Hair Color: {this.props.personHaircolor}</p>
                <button onClick={() => this.setState({ personAge: this.state.personAge + 1 })}>Birthday Button for {this.props.personName}</button>
            </div>
        );
    }
}

export default PersonCard;