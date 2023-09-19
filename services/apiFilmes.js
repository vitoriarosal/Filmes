import axios from "axios";

const apiFilmes = axios.create({
    baseURL: ' https://api.themoviedb.org/3/',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDRlMDE1ZGIxYmZkODdlOTBkOGJlYjVmMGRmMjU1YSIsInN1YiI6IjY0ZjY0NWVjYjIzNGI5MDBlMzAwMGI0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W2NigpSYHjpt2Zz0DiXui1RvsLCdUqEQrbcmvOcQVsg'

    }
})

export default apiFilmes
