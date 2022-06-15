import React, {useEffect, useRef} from 'react';
import {useStore} from "effector-react";
import {$location, getLocationEffect, pagesLocationFx} from "../../../effector/Location";
import {LocationInt} from "../../../types/Types";
import {Col, Row} from "react-bootstrap";
import CharacterCard from "../../CharacterCard/CharacterCard";

const Location = () => {
    const location = useStore<LocationInt[]>($location)

    useEffect(() => {
        getLocationEffect()
    }, [])


    const lastElement = useRef<HTMLDivElement>(null)
    const observer = useRef<any>()

    useEffect(() => {
        getLocationEffect()
        let startPage: number = 1
        const callback = (entries: any) => {
            if (entries[0].isIntersecting) {
                startPage++
                pagesLocationFx(startPage)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)

    }, [])

    return (
        <div>
            <h1 className="mt-4">Location</h1>
            <div className="mt-2">
                {location.map(item =>

                    <div key={item.id} className="mb-4">
                        <div className="text-secondary">
                            <hr/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h2>{item.name}</h2>
                            <div className="fs-4 text-success fw-bold">{item.type}</div>
                        </div>
                        <div className="fs-5 mt-1 text-secondary "><strong>Dimension</strong>: {item.dimension}</div>
                        {item.residents.length > 0 &&
                            <div className="mt-3">
                                <Row>
                                    {
                                        item.residents.map((item: string, idx: number) =>
                                            <Col md={3} className="mb-4" key={idx}>
                                                <CharacterCard urlApi={item}/>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </div>
                        }
                        {item.residents.length === 0 &&
                            <div className="alert alert-warning fs-5 mt-2" role="alert">There's no one herethere's no one here</div>
                        }
                    </div>
                )}
                <div ref={lastElement} style={{height: 20, width: "100%"}}></div>
            </div>
        </div>
    );
};

export default Location;