import {createEffect, createStore} from "effector";
import {apiCharacter, apiLocation} from "../api/Api";
import {LocationInt} from "../types/Types";
import {pagesCharacterFx} from "./Character";

const defaultLocation = [{
    id: 0,
    name:'',
    type: '',
    dimension: '',
    residents:[],
    url:'',
    created:''
}]


/*get Character*/
export const getLocationEffect = createEffect(async () =>
    await apiLocation.getLocation().then(response => response.results)
)

/*pages*/
export const pagesLocationFx = createEffect(async (page: number) =>
    await apiLocation.getPagesActive(page)
        .then(response => response.results
        )
)

export const $location = createStore<LocationInt[]>(defaultLocation)
    .on(getLocationEffect.doneData,
        (state, repos) => repos)
    .on(pagesLocationFx.doneData,
        (state: any, repos) => {
            let newState: any = [...state, ...repos]
            return newState
        }
    )