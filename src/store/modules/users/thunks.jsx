import api from "../../../services/api";
import { getUsers } from "./actions";

const getUsersThunk = () => (dispatch) => {
    api
      .get(`/users`)
      .then((resp) => dispatch(getUsers(resp.data)))
      .catch((err) => console.log(err));
}

export default getUsersThunk;