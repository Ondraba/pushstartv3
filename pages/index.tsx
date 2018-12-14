import * as React from 'react';
import {useReducer} from 'react';

import {Button} from '@material-ui/core';

interface Props {}

const initialState = {count: 0};

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
};

interface CounterProps {
    readonly initialCount: number;
}
const Counter: React.FC<CounterProps> = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, {count: initialCount});
    return (
        <>
            Count: {state.count}
            <Button variant="contained" color="secondary" onClick={() => dispatch({type: 'reset'})}>
                Reset
            </Button>
            <Button variant="contained" color="primary" onClick={() => dispatch({type: 'increment'})}>
                +
            </Button>
            <Button variant="contained" color="primary" onClick={() => dispatch({type: 'decrement'})}>
                -
            </Button>
        </>
    );
};

const Index: React.FC<Props> = () => {
    return <Counter initialCount={0} />;
};

export default Index;
