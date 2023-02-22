import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const add1 = () => {
        setCount(count + 1);
    }
    const sub1 = () => {
        setCount(count - 1);
    }
    return (
    <div className="d-flex">
        <button type='button' onClick={add1}>+</button>
        <p className="count">{count}</p>
        <button type='button' onClick={sub1}>-</button>
    </div>
    )
}

export default Counter