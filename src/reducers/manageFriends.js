export function manageFriends(state={friends: []}, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {friends: state.friends.concat(action.friend)}
    case "REMOVE_FRIEND":
      const friendIdx = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: state.friends.slice(0, friendIdx).concat(state.friends.slice(friendIdx+1, state.friends.length))}
    default:
      return state
  }
}
