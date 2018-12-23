import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			equation: [],
			inputs: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAllClear = this.handleAllClear.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleAllClear(e) {
		console.log(this.state.inputs);
		this.setState({
			inputs: []
		});
	}
	// fix this fucking bullshit learn how to use array methods
	handleClear(e) {
		if (this.state.inputs.length === 0) {
			return;
		} else {
			this.setState({
				inputs: this.state.inputs.slice(0,-1)
			});
			console.log(this.state.inputs);
		}
	}
	handleInput(e) {
		console.log(e.target.value);
		this.setState({
			inputs: [...this.state.inputs, e.target.value]
		});
		console.log(this.state.inputs);
	}

	handleSubmit(e) {
		e.preventDefault();
		const answer = this.state.inputs.reduce((total, operator) => {
			return total + operator;
		});
		console.log(answer);
	}
	mulitply = (a, b) => a * b;
	divide = (a, b) => a * b;
	add = (a, b) => a + b;
	subtract = (a, b) => a - b;
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div id="calcOutput">
						<span id="steps">{this.state.inputs}</span>
						<hr />
					</div>
					<div className="text-center" id="calculator">
						<Button
							id="deleteAll"
							className="  red "
							onClick={this.handleAllClear}
						>
							AC
						</Button>
						<Button id="backOne" className="  red " onClick={this.handleClear}>
							CE
						</Button>
						<Button value="/" className="  green " onClick={this.handleInput}>
							/
						</Button>
						<Button value="*" className="  green" onClick={this.handleInput}>
							x
						</Button>
						<br />
						<Button value="7" className="  black" onClick={this.handleInput}>
							7
						</Button>
						<Button value="8" className="  black " onClick={this.handleInput}>
							8
						</Button>
						<Button value="9" className="  black " onClick={this.handleInput}>
							9
						</Button>
						<Button value="-" className="  green " onClick={this.handleInput}>
							--
						</Button>
						<br />
						<Button value="4" className="  black " onClick={this.handleInput}>
							4
						</Button>
						<Button value="5" className="  black " onClick={this.handleInput}>
							5
						</Button>
						<Button value="6" className="  black " onClick={this.handleInput}>
							6
						</Button>
						<Button value="+" className="  green " onClick={this.handleInput}>
							+
						</Button>
						<br />
						<Button value="1" className="  black " onClick={this.handleInput}>
							1
						</Button>
						<Button value="2" className="  black " onClick={this.handleInput}>
							2
						</Button>
						<Button value="3" className="  black " onClick={this.handleInput}>
							3
						</Button>
						<Button value="." className="  black " onClick={this.handleInput}>
							.
						</Button>
						<br />
						<Button
							value="0"
							className="  black  bigButton"
							onClick={this.handleInput}
						>
							0
						</Button>
						<Equals empty={this.state.inputs} handler={this.handleSubmit} />
					</div>
				</header>
			</div>
		);
	}
}
const Equals = props => {
	const x = props.empty;
	if (x.length === 0) {
		return (
			<Button value="total" className="disabled green bigButton">
				=
			</Button>
		);
	} else {
		return (
			<Button value="total" className="green bigButton" onClick={props.handler}>
				=
			</Button>
		);
	}
};

export default App;
