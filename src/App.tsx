import React, {FC, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import {useStore} from "effector-react";
import $store, {fetchUserReposFx} from "./redux/Store";
import PaginationBlock from "./components/PaginationBlock/PaginationBlock";
import Search from "./components/Search/Search";
import TableBlock from "./components/TableBlock/TableBlock";
import Control from "./components/Control/Control";

const App: FC = () => {

    const arrEpisode: any[] = useStore<any>($store)

    useEffect(() => {
        fetchUserReposFx()
    }, [])

    if (arrEpisode.length < 1) {
        return <Loading/>
    }

    return (
        <div className="App">
            <Header/>
            <Container>
                <div className="app-search mt-4 d-flex justify-content-between">
                    <Search/>
                    <Control/>
                </div>
                <div className="app-body">
                    <div className="app-list">
                        <div className="app-table">
                            <TableBlock data={arrEpisode}/>
                            <PaginationBlock/>
                        </div>
                    </div>
                    <div className="app-sidebar"></div>
                </div>
            </Container>
        </div>
    );
}

export default App;
