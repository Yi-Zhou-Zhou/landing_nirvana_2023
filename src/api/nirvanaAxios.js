import axios from "axios";

const nirvanaAxios = axios.create( {
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 600000
} );

export default nirvanaAxios;