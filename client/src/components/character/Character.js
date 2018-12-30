import React, { Component } from 'react';

class Character extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }


componentDidMount() {
    fetch('http://localhost:5000/api/character/byname/Lia%20Sarenwell')
    .then(results => {
        return results.json();
    })
      .then(data => {
          this.setState({ character: data })
      })
}

render() {
    return (
        <pre>
            { this.state.character ? JSON.stringify(this.state.character, null, 2)  : "null" }
        </pre>
    )
}
}

export default Character;