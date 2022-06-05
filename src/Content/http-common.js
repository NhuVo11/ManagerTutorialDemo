import axios from "axios";

const COURSE_API_URL = 'http://localhost:8080/api';

export default axios.create(
    {
        baseURL: COURSE_API_URL,
        headers: {"Content-type": "application/json"}
    }
)
