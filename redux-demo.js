const redux = require('redux');

// Reducer function to manage the counter state
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
};

// Creating a Redux store with the counterReducer
const store = redux.createStore(counterReducer);

// Subscriber function to log the latest state
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Subscribe to the store to listen for state changes
store.subscribe(counterSubscriber);

// Dispatching the 'increment' action 5 times
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });


