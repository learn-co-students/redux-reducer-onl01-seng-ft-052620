export function manageFriends(state, action){
    // console.log(state.friends)
    switch(action.type){
        case 'ADD_FRIEND':
        // if action.friend
        let updatedState = Object.assign({}, state, {
                friends: [...state.friends, action.friend]
            });
        console.log(updatedState)
        return updatedState;
        default:
            return state;
    }
}
