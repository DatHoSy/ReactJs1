import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

const Title = styled.span`
    color: aqua;
    div {
        span {
            background-color: #f0fffe;
        }
    }
`;

const Wrapper = styled.section`
    color: ${props => props.dem >= 5 ? "#0000ff" : "#0eebae"};
    padding: 4em;
    background: #db5d22;
    span {
        background-color: green;
    }
`;

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    onDerease() {
        this.setState({ count: this.state.count - 1 });
    }
    onInrease() {
        this.setState({ count: this.state.count + 1 });
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     if (nextProps.name !== "nam") {
    //         return false;
    //     }
    //     return true
    // }

    render() {
        console.log('renderr');
        return (
            <Wrapper dem={this.state.count}>
                <Title>
                    Hello test color
                </Title>
                <h2>Hello: {this.props.name}</h2>
                <h2>Hello: {this.props.test}</h2>
                <button onClick={() => this.onDerease()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.onInrease()}>-</button>
                <Button></Button>
            </Wrapper>
        )
    }
}