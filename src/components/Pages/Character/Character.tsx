import React, {FC, useEffect, useRef} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useStore} from "effector-react";
import {$character, getCharacterEffect, pagesCharacterFx} from "../../../effector/Character";

const Character: FC = () => {
    const characters: any[] = useStore<any>($character)

    const lastElement = useRef<HTMLDivElement>(null)
    const observer = useRef<any>()

    useEffect(() => {
        getCharacterEffect()
        let startPage: number = 1
        const callback = (entries: any) => {
            if (entries[0].isIntersecting) {
                startPage++
                pagesCharacterFx(startPage)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)

    }, [])

    return (
        <div className="mt-4">
            <Row xs={1} md={3} className="g-4">
                {characters.map(item =>
                    <Col key={item.id}>
                        <Card>
                            <Card.Header>
                                <div className="d-flex justify-content-end">
                                    {item.status === "Alive" &&
                                        <span className="fs-5 fw-bold text-success">{item.status}</span>
                                    }
                                    {item.status === "Dead" &&
                                        <span className="fs-5 fw-bold text-danger">{item.status}</span>
                                    }
                                    {item.status === "unknown" &&
                                        <span className="fs-5 fw-bold text-warning">{item.status}</span>
                                    }
                                </div>
                            </Card.Header>
                            <Card.Img variant="top" src={item.image}/>
                            <Card.Body>
                                <Card.Title className="fs-4 fw-bold">{item.name}</Card.Title>
                                <Card.Text>
                                    <div><strong>Gender</strong> - {item.gender}</div>
                                    <div><strong>Species</strong> - {item.species}</div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div className="fs-7    "><strong>Location</strong>: {item.location.name}</div>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            <div ref={lastElement} style={{height: 20, width: "100%"}}/>
        </div>
    );
};

export default Character;