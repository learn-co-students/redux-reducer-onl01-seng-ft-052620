export function manageFriends(state, action){

    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const boyBye = (find) => find.id === action.id
            const removalIndex = state.friends.findIndex(boyBye)
            return {friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
              ]}
          default:
            return state
    }

}
