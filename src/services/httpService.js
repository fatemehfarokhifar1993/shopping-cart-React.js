import axios from "axios";
//axios.defaults.baseURL="http://localhost:5000/api"
axios.defaults.baseURL="https://nodejs-post-app.herokuapp.com/api"
const http={
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put,
}
export default http;