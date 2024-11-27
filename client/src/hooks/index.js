import React from 'react';
import { useCustomHook } from './hooks';

const MyComponent = () => {
    const [state, setState] = useCustomHook();

    return (
        <div>
            <p>State: {state}</p>
            <button onClick={() => setState('New State')}>Update State</button>
        </div>
    );
};

export default MyComponent;