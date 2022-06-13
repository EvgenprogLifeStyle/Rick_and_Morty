import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {

    }
})

export const apiRequest = {
    getEpisode: () => instance.get(`episode`).then(response => response.data),
    searchEpisode: (data:string) => instance.get(`episode/?name=${data}`).then(response => response.data)
}