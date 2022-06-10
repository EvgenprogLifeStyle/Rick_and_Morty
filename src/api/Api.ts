import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {

    }
})

export const apiRequest = {
    getEpisode: () => instance.get(`episode`).then(response => response.data)
}