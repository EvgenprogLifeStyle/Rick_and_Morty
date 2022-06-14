import React, {FC, useEffect} from 'react';
import {useStore} from "effector-react";
import {$episodeDetail, getEpisodeDetail} from "../../effector/Store";
import {useParams} from "react-router-dom";
import Loading from "../Loading/Loading";
import {Col, Row} from 'react-bootstrap';
import CharacterCard from "../CharacterCard/CharacterCard";

// interface propsInt{
//     id: number;
//     name:string;
//     air_date: string;
//     characters: any[];
//     created: string;
//     episode: string;
//     url?:string
// }

const Detail: FC = () => {

    const {id} = useParams()
    const detailData: any = useStore($episodeDetail)

    useEffect(() => {
        getEpisodeDetail(id!)
    }, [])

    console.log(detailData)

    return <>
        {detailData === null
            ? <Loading/>
            :
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <h1>{detailData.name}</h1>
                    <div className="fs-5 mt-2">{detailData.air_date}</div>
                </div>
                <div className="fs-5 mt-1">Season - {detailData.episode}</div>
                <div className="mt-4">
                    <h2>Characters</h2>
                    <div className="d-flex mt-2">
                        <Row>
                            {
                                detailData.characters.map((item: string, idx: number) =>
                                    <Col md={3} className="mb-4" key={idx}>
                                        <CharacterCard urlApi={item}/>
                                    </Col>
                                )
                            }
                        </Row>
                    </div>
                </div>
            </div>
        }
    </>

};

export default Detail;