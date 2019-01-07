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
				console.log(this.state.abilityScores)
			})
	}
	/* {this.state.abilityScores ? JSON.stringify(this.state.abilityScores, null, 2) : "null"} */

	render() {

		const list = Object.keys(this.state.abilityScores).map(ability =>
			<ul>
				<li>
					{ability}:
					<ul>
						{Object.keys(this.state.abilityScores[ability]).map(property =>
							<li>{property}: {this.state.abilityScores[ability][property]}</li>
						)}
					</ul>
				</li>
			</ul>
		)

		return (
			<div>
				{list}
			</div >
		)
	}
}