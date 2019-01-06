import React, { Component } from 'react';

export default class AbilityScores extends Component {

	constructor() {
		super()
		this.state = {
			abilityScores: {}
		}
	}

	componentDidMount() {
		fetch('http://192.168.99.100:5000/api/character/byname/Lia%20Sarenwell')
			.then(results => {
				return results.json();
			})
			.then(data => {
				this.setState({ abilityScores: data.abilityScores })
			})
	}
	/* {this.state.abilityScores ? JSON.stringify(this.state.abilityScores, null, 2) : "null"} */

	render() {

		const abilityScoresList = Object.keys(this.state.abilityScores).map(key =>
			<li>{key}: {JSON.stringify(this.state.abilityScores[key])}</li>
		)

		return (
			<div>
				<ul>
					{abilityScoresList}
				</ul>
			</div >
		)
	}
}