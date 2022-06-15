import React, {FC, Suspense, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import {useStore} from "effector-react";
import {$episode, getEpisodeReposFx} from "./effector/Episode";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {EpisodeInt} from "./types/Types";
const Character = React.lazy(() => import('./components/Pages/Character/Character'));
const Detail = React.lazy(() => import('./components/Pages/Detail/Detail'));
const Home = React.lazy(() => import('./components/Pages/Home/Home'));
const Location = React.lazy(() => import('./components/Pages/Location/Location'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

const App: FC = () => {
    const arrEpisode = useStore<EpisodeInt[]>($episode)

    useEffect(() => {
        getEpisodeReposFx()
    }, [])

    if (arrEpisode.length < 1) {
        return <Loading/>
    }

    return (
        <Router>
            <Header/>
            <Container>
                <Suspense fallback={<Loading/>}>
                    <Routes>
                        <Route path='/' element={<Navigate replace to="/episode"/>}/>
                        <Route path='/episode' element={<Home/>}/>
                        <Route path='/character' element={<Character/>}/>
                        <Route path='/episode/:id' element={<Detail/>}/>
                        <Route path='/location' element={<Location/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Suspense>
            </Container>
        </Router>
    );
}

export default App;
