export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let newState = [...state.friends]
            let index = newState.findIndex(f => f.id === action.id)
            newState.splice(index, 1)
            return {friends: newState}
        default:
            return state
    }
}
