export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let friend = state.friends.find(f => f.id === action.id)
            return {...state, friends: state.friends.filter(permanentFriend => permanentFriend != friend)}
        default: 
            return state
    }
}
