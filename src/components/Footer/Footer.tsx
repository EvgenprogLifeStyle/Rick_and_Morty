import React from 'react';
import s from './Footer.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import lk from "./../../assets/images/in.svg"
import git from "./../../assets/images/git.svg"
import telegram from "./../../assets/images/telegram.svg"

const Footer = () => {
    return (
        <div className='bg-dark py-4 text-white'>
            <Container>
                <Row>
                    <Col className="text-start fs-5">
                        Разработал за 4 дня как ТЗ
                    </Col>
                    <Col className="text-start d-flex justify-content-center">
                        <a className="mx-3" href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-865b36203/"><img
                            src={lk} alt="linkedin"/></a>
                        <a className="mx-3"  href="https://github.com/EvgenprogLifeStyle"><img src={git} alt=""/></a>
                        <a className="mx-3"  href="https://t.me/evgen_prog"><img src={telegram} alt="telegram"/></a>
                    </Col>
                    <Col className="text-end fs-5">
                        Разработал: <a href="https://evgen-prog.ru"
                                       className="text-secondary fw-bold text-decoration-none">Evgen</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;