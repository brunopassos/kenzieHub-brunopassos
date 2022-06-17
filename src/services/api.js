import axios from "axios";

const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`
    }
});

export default api;