import React, {FC, useEffect, useState} from 'react';

import {apiRequest} from "./api/Api";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Container, Form, Stack, Table} from "react-bootstrap";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

// interface StateEpisode {
//     info: any;
//     results: [];
// }

const App: FC = () => {


    const [episode, setEpisode] = useState<any[]>([])
    const resp = async () => await apiRequest.getEpisode().then(response => {
        setEpisode(response.results)
    })


    useEffect(() => {
        resp()

    }, [])

    if(episode.length < 1){
        return <Loading/>
    }
    return (
        <div className="App">
            <Header/>
            <Container>
                <div className="d-flex">
                    <div className="app-search mt-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={3}>
                                    <Form.Control className="mr-auto" type="text" placeholder="Search"/>
                                    <Button className="ml-1 btn" variant="primary" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </Button>
                                </Stack>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className="app-body">
                    <div className="app-list">
                        <div className="app-table">
                            <div className="app-table__tbody">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Episode number</th>
                                            <th>Number of characters</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {episode &&
                                          episode.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.air_date}</td>
                                                <td>{item.episode}</td>
                                                <td>{item.characters.length}</td>
                                            </tr>
                                        )

                                    }


                                    </tbody>
                                </Table>

                            </div>
                        </div>
                    </div>
                    <div className="app-sidebar"></div>
                </div>
            </Container>
        </div>
    );
}

export default App;
