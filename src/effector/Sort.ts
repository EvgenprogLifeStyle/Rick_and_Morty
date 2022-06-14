import {createEffect} from "effector";

import {apiEpisode} from "../api/Api";

export const sortCharacter = createEffect(async () =>


    await apiEpisode.getEpisode().then(response =>
    {
        let data =  response.results

        data.name.sort();
        console.log("=")
        console.log( data.name)
    })


)