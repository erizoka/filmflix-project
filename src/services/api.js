import axios from "axios";

// chave API c487aa0bcfa2ae6f85247cad3b8b2f68
// BASE DA API: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=c487aa0bcfa2ae6f85247cad3b8b2f68&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;