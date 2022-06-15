import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {}
})

export const apiEpisode = {
    getEpisode: () => instance.get(`episode`).then(response => response.data),
    getEpisodeDetail: (episodeId: string) => instance.get(`episode/${episodeId}`).then(response => response.data),
    searchEpisode: (data: string) => instance.get(`episode/?name=${data}`).then(response => response.data.results),
    getPages: () => instance.get(`episode`).then(response => response.data.info),
    getPagesActive: (page: number) => instance.get(`episode?page=${page}`).then(response => response.data)
}

export const apiCharacter = {
    getCharacter: () => instance.get(`character`).then(response => response.data),
    getCharacterCard: (url: string) => axios.get(url),
    getPagesActive: (page: number) => instance.get(`character?page=${page}`).then(response => response.data)
}
export const apiLocation = {
    getLocation: () => instance.get(`location`).then(response => response.data),
    getPagesActive: (page: number) => instance.get(`location?page=${page}`).then(response => response.data)
}
