import React, { Component } from 'react';

class Character extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }


componentDidMount() {
    fetch('http://server:5000/api/character/byname/Lia%20Sarenwell')
      .then(results => {
          return results.json();
      })
      .then(data => {
          this.setState(data)
      })
}

render() {
    return (
        <div>
            { !this.state.character ? this.state.character : null }
        </div>
    )
}
}

export default Character;