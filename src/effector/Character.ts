import {createEffect, createEvent, createStore} from "effector";
import {apiCharacter} from "../api/Api";
import {CharacterInt} from "../types/Types";

const defaultCharacter =[{
    id: 0,
    name: "",
    status:"",
    species:"",
    type:"",
    gender:"",
    location:[],
    origin:[],
    image:"",
    url:"",
    created:"",
}]


/*get Character*/
export const getCharacterEffect = createEffect(async () =>
    await apiCharacter.getCharacter().then(response => response.results)
)

/*pages*/
export const pagesCharacterFx = createEffect(async (page: number) =>
    await apiCharacter.getPagesActive(page)
        .then(response => response.results
        )
)


export const $character = createStore<CharacterInt[]>(defaultCharacter)
    .on(getCharacterEffect.doneData,
        (state, repos) => repos)
    .on(pagesCharacterFx.doneData,
        (state: any, repos) => {
            let newState: any = [...state, ...repos]
            return newState
        }
    )
