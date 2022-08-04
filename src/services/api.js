import axios from "axios";

const api = axios.create({
    baseURL: "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=programados2",
});
export default api;