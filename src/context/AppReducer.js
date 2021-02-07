export default (state,action) => {
    switch(action.type){
        case "ADD":
            return {
                users: [action.payload,...state.users]
            }
        case "EDIT":
            const updateUser = action.payload;
            const updateUsers = state.users.map(user=>{
                if (user.id === updateUser.id){
                    return updateUser
                }
                return user
            })
            return {
                ...state,
                users: updateUsers
            }
        case "REMOVE":
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }

        default:
            return state
    }
}