import {createEffect, createStore} from 'effector'
import {apiEpisode} from "../api/Api";

/*get Episode*/
export const fetchUserReposFx = createEffect(async () =>
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

export const $error = createStore('').on(errorSearch,
    (state, repos) => repos)

const $store = createStore([])
    .on(fetchUserReposFx.doneData,
        (state, repos) => repos)
    .on(searchReposFx.doneData,
        (_, repos) => repos)
// .on(sortCharacter.doneData,
//     (_, repos) => repos)


/*get Episode detail*/
export const getEpisodeDetail = createEffect(async (episodeId: string) =>
    await apiEpisode.getEpisodeDetail(episodeId).then(response => response)
)

export const $episodeDetail = createStore(null)
    .on(getEpisodeDetail.doneData, (_, repos) => repos)

export default $store