import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    color: ${props => props.changeColor >= 2 ? "blue" : "green"};
    background-color: red;
`

export const Counter2 = ({ className, name }) => {
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 3000);
    }, [count])

    const onDerease = () => {
        setCount(count - 1);
    }

    const onInrease = () => {
        setCount(count + 1);
    }

    return (
        <>
            {
                loading === true ?
                    (<div>Loading</div>) :
                    (
                        <Wrapper changeColor={count} className={className}>
                            <h2>hello: {name}</h2>
                            <button onClick={() => onDerease()}>-</button>
                            <span>{count}</span>
                            <button onClick={() => onInrease()}>-</button>
                        </Wrapper>
                    )
            }
        </>
    )
}