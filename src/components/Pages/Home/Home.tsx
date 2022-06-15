import React, {FC, useEffect, useState} from 'react';
import Search from "../../Search/Search";
import Control from "../../Control/Control";
import TableBlock from "../../TableBlock/TableBlock";
import PaginationBlock from "../../PaginationBlock/PaginationBlock";
import {useStore} from "effector-react";
import {$episode, $error, getEpisodeReposFx, pagesReposFx} from "../../../effector/Episode";
import {apiEpisode} from "../../../api/Api";

const Home: FC = () => {
    const arrEpisode: any[] = useStore<any>($episode)
    const [disabledData, setDisabledData] = useState(true)
    const [disabledEN, setDisabledEN] = useState(true)
    const [disabledCharacter, setDisabledCharacter] = useState(true)
    const [allPages, setAllPages] = useState<number>(0)
    const notError = useStore($error)

    const onToggleDate = (e: React.ChangeEvent<HTMLInputElement>) =>
        setDisabledData(e.target.checked)
    const onToggleEN = (e: React.ChangeEvent<HTMLInputElement>) =>
        setDisabledEN(e.target.checked)
    const onToggleCharacter = (e: React.ChangeEvent<HTMLInputElement>) =>
        setDisabledCharacter(e.target.checked)


    const pagesAllEpisode = async () =>
        await apiEpisode.getPages().then(response => {
                setAllPages(response.pages)
            }
        )


    useEffect(() => {
        getEpisodeReposFx()
        pagesAllEpisode()
    }, [])


    return (
        <>
            <div className="app-search mt-4 d-flex justify-content-between">
                <Search/>
                <Control onToggleDate={onToggleDate} disabledData={disabledData} onToggleEN={onToggleEN}
                         disabledEN={disabledEN} onToggleCharacter={onToggleCharacter}
                         disabledCharacter={disabledCharacter}/>
            </div>
            <div className="app-body">
                <div className="app-list">
                    <div className="app-table">
                        <TableBlock data={arrEpisode} disabledData={disabledData} disabledEN={disabledEN}
                                    disabledCharacter={disabledCharacter}/>
                        {allPages != 0 && !notError && arrEpisode.length > 10 &&
                            <PaginationBlock onClickPage={pagesReposFx} pagesAll={allPages}/>
                        }


                    </div>
                </div>
                <div className="app-sidebar"></div>
            </div>
        </>

    );
};

export default Home;