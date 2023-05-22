import { useState, useEffect } from "react";

export const Counter2 = ({name}) => {
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect ( () => {
        setTimeout(() => {setLoading(false)}, 3000);
    }, [count])

    const onDerease = () => {
        setCount(count-1);
    }

    const onInrease = () => {
        setCount(count+1);
    }
    
    return (
        <>
        {
            loading === true ?
            (<div>Loading</div>) :
            (
                <>
                <h2>hello: {name}</h2>
                <button onClick={() => onDerease()}>-</button>
                <span>{count}</span>
                <button onClick={() => onInrease()}>-</button>
                </>
            )
        }
        </>
    )
}
