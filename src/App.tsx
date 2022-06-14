import React, {FC, Suspense, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import {useStore} from "effector-react";
import $store, {fetchUserReposFx} from "./effector/Store";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Detail from "./components/Detail/Detail";
import {sortCharacter} from "./effector/Sort";

const App: FC = () => {

    const arrEpisode: any[] = useStore<any>($store)

    useEffect(() => {
        fetchUserReposFx()
        sortCharacter()
    }, [])

    if (arrEpisode.length < 1) {
        return <Loading/>
    }

    return (
        <Router>
            <Suspense fallback={<Loading/>}>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Navigate replace to="/episode"/>}/>
                        <Route path='/episode' element={<Home/>}/>
                        <Route path='/episode/:id' element={<Detail/>}/>
                    </Routes>
                </Container>
            </Suspense>
        </Router>
    );
}

export default App;
