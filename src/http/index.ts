import axios from "axios";

const http = axios.create({
    baseURL: "https://backendprojetofinal.onrender.com",
    headers: {
        "Content-Type": "applications/json",
    },
});

export default http;