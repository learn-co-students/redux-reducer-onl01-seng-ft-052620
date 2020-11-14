export function managePresents(state, action){
    
    switch(action.type){
        case 'INCREASE':
            // console.log("State = ", state);
            // console.log("Action = ", action);
            // let num = state.numberOfPresents + 1;
            // let newState = {numberOfPresents: num};
            // let numberOfPresents: {}
            // numberOfPresents= {numberOfPresents + 1};
            // let newState = {...state, numberOfPresents: state.numberOfPresents + 1}
            let increasedState = Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1});
            return increasedState;
        case 'DECREASE':
            let decreaseState = Object.assign({}, state, {numberOfPresents: state.numberOfPresents - 1});
            // const numberOfPresents: {state.numberOfPresents - 1}
            // return numberOfPresents;
            return decreaseState;
        default:
            return state;
    }
}
