export function manageFriends(state, action){
    switch (action.type){
        case 'ADD FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE FRIEND':
            return state 
        default: 
            return state
    }
}
