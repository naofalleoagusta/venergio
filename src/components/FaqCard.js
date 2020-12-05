import React from "react";
import { Row, Col } from "react-bootstrap";
import "./FaqCard.css";


function FaqCard({ question, answer, isDesktop }) {
    return (
        <Col xs={12} lg={6} className="my-4">
            <Row className="px-3">
                <Col xs={1} className={`${isDesktop ? "" : "p-0"} text-center vertical-center`}>
                    <div>
                        <span className="fa-stack fa-2x faq-icon">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-question fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                </Col>
                <Col xs={11} className="vertical-center">
                    <h5 style={{ fontWeight: 700 }}>{question}</h5>
                </Col>
                <Col xs={1} className={`${isDesktop ? "mt-4" : "mt-3 p-0"}`}>
                </Col>
                <Col xs={11} className={`${isDesktop ? "mt-4" : "mt-3"} faq-answer`}>
                    {answer}
                </Col>
            </Row>
        </Col>
    );
}

export default FaqCard;
