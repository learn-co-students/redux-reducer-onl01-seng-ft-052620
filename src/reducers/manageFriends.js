export function manageFriends(state, action){
    // console.log(state.friends)
    switch(action.type){
        case 'ADD_FRIEND':
        // if action.friend
        let updatedState = Object.assign(
            {},
            state,
            {
                friends: state.friends
            });
        console.log(updatedState)
        return updatedState;
        default:
            return state;
    }
}
