import React from "react";

export class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {count: 0};
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }


    onDerease () {
        this.setState({count: this.state.count-1});
    }
    onInrease () {
        this.setState({count: this.state.count+1});
    }

    render() {
        console.log('renderr');
        return (
            <div>
                <h2>Hello: {this.props.name}</h2>
                <h2>Hello: {this.props.test}</h2>
                <button onClick={() => this.onDerease()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.onInrease()}>-</button>
            </div>
        )
    }
}