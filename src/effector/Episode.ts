import {createEffect, createStore} from 'effector'
import {apiEpisode} from "../api/Api";
import {EpisodeInt} from "../types/Types";


const defaultEpisode =[{
    id: 0,
    name:"",
    air_date: "",
    characters: [],
    created: '',
    episode: '',
    url:'',
}]


/*get Episode*/
export const getEpisodeReposFx = createEffect(async () =>
    await apiEpisode.getEpisode().then(response => response.results)
)

/*error*/
export const errorSearch = createEffect((error: string) => error)

/*search*/
export const searchReposFx = createEffect(async (data: string) =>
    await apiEpisode.searchEpisode(data)
        .then((response) => {
            errorSearch('')
            return response
        })
        .catch(() =>
            errorSearch('Поиск не дал результат!')
        )
)

/*pages*/
export const pagesReposFx = createEffect(async (page: number) =>
    await apiEpisode.getPagesActive(page)
        .then(response =>{
            console.log(response.results)
            return response.results
        }  )
)

export const $error = createStore<string>('').on(errorSearch,
    (state, repos) => repos)



export const $episode = createStore<EpisodeInt[]>(defaultEpisode)
    .on(getEpisodeReposFx.doneData,
        (state, repos) => repos)
    .on(searchReposFx.doneData,
        (_, repos) => repos)
    .on(pagesReposFx.doneData,
        (_, repos) => repos)
// .on(sortCharacter.doneData,
//     (_, repos) => repos)


/*get Episode detail*/
export const getEpisodeDetail = createEffect(async (episodeId: string) =>
    await apiEpisode.getEpisodeDetail(episodeId).then(response => response)
)

export const $episodeDetail = createStore(null)
    .on(getEpisodeDetail.doneData, (_, repos) => repos)

