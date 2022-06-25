import { GET_USERS } from "./actionsTypes";

const usersReducer = (state = [], action) => {
    console.log(action.users)
    switch (action.type) {
        case GET_USERS:
            const  users  = action.users;
            return users;
    
        default:
            return state;
    }
}

export default usersReducer;