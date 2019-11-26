import React, { Component } from 'react';
import '../styles/HeaderSection.css';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    render() {
        return (
            <div>
                <h1> Hello! </h1>
                <h1> I am {this.state.name}! </h1>
            </div>
        )
    }
}

export default HeaderSection;