export function manageFriends(state, action){
    // console.log(state.friends)
    switch(action.type){
        case 'ADD_FRIEND':
        // if action.friend
            let updatedState = Object.assign({}, state, {
                    friends: [...state.friends, action.friend]
            });
            return updatedState;
        case 'REMOVE_FRIEND':
            console.log()
            const removeState = Object.assign({}, state, {
                friends: [...state.friends].filter(friend => (friend.id !== action.id))
            })
            return removeState;
        default:
            return state;
    }
}
