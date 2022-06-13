import {createEffect, createStore} from 'effector'
import {apiRequest} from "../api/Api";


export const fetchUserReposFx = createEffect(async () =>
    await apiRequest.getEpisode().then(response => response.results)
)

export const searchReposFx = createEffect(async ( data:string) =>
    await apiRequest.searchEpisode(data)
)


const $store = createStore([])
    .on(fetchUserReposFx.doneData,
        (_, repos) => repos)


export const $resultSearch =   createStore([])
    .on(searchReposFx.doneData,
        (_, repos) => repos)

$store.watch(repos => {
    console.log(`${repos.length} repos`)
})

$resultSearch.watch(repos => {
    console.log(`${repos.length} repos`)
})

export default $store