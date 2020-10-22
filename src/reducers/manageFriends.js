export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
      return (
        {...state,
            friends: [
              ...state.friends,
              action.friend
            ]
        }
      )
         case "REMOVE_FRIEND":
      const removIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removIndex),
              ...state.friends.slice(removIndex + 1)
            ]
        }
      )
        
        default:
            return state
    }
}
