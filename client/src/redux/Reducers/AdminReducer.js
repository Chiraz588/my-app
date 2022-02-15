import { GET_ALL_USERS } from "../types/userTypes";
const initState = { users: [], user: {}};
const AdminReducer = (state = initState, action) => {
  switch (action.type) {
   
    case GET_ALL_USERS:
      return { ...state, users: action.payload, isLaoding: false };
    
    default:
      return state;
  }
};
export default AdminReducer;
