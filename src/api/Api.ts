import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {}
})

export const apiEpisode = {
    getEpisode: () => instance.get(`episode`).then(response => response.data),
    getEpisodeDetail: (episodeId: string) => instance.get(`episode/${episodeId}`).then(response => response.data),
    searchEpisode: (data: string) => instance.get(`episode/?name=${data}`).then(response => response.data.results)
}
export const apiCharacter = {
    getCharacterCard: (url: string) => axios.get(url)
}