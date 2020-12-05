import React/*, { useState }*/ from 'react';
import PageTitle from "../components/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import FaqCard from "../components/FaqCard";
import "./Faq.css";
import "../components/FaqCard.css";
import { GET_FAQS } from "../gql/faq";
import { useQuery } from '@apollo/client';
import MediaQuery from "react-responsive";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function FaqCardPlaceHolder({ isDesktop }) {
    return (
        <Col xs={12} lg={6} className="my-4">
            <Row className="px-3">
                <Col xs={1} className={`${isDesktop ? "" : "p-0"} text-center vertical-center`}>
                    <Skeleton circle={true} height={35} width={35} />
                </Col>
                <Col xs={11} className="vertical-center">
                    <Skeleton count={1} width={200} height={30} />
                </Col>
                <Col xs={1} className={`${isDesktop ? "mt-4" : "mt-3 p-0"}`}>
                </Col>
                <Col xs={11} className={`${isDesktop ? "mt-4" : "mt-3"} faq-answer`}>
                    <Skeleton height={300} width={isDesktop?500 :275} />
                </Col>
            </Row>
        </Col>
    )
}

function FaqContainerPlaceholder({ isDesktop }) {
    return (
        <SkeletonTheme color="#a8a8a7" highlightColor="#b8b4b4">
            <Row>
                {
                    [0, 1, 2, 3].map((item,idx) => (<FaqCardPlaceHolder isDesktop={isDesktop} key={`faq-skeleton-card-${idx}`}/>))
                }
            </Row>
        </SkeletonTheme>
    )
}

function FaqContainer({ isDesktop }) {
    const { loading, error, data } = useQuery(GET_FAQS);
    if (loading) return (
        <FaqContainerPlaceholder isDesktop={isDesktop} />);
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    const faqs = data.getFaqs;
    return (
        <>
            {faqs.map((item,idx) =>
                (item.enabled ? <FaqCard
                    question={item.question}
                    answer={item.answer}
                    isDesktop={isDesktop}
                    key={`faq-card-${idx}`}
                /> : "")
            )}
        </>
    )
}

function Faq() {
    return (
        <MediaQuery minWidth={768}>
            {isDesktop => {
                return (
                    <>
                        <PageTitle title="Pusat Bantuan" />
                        <Container className={`${isDesktop ? "py-5 my-5" : "py-3 my-3"} faq-container`}>
                            <Row className="px-1">
                                <Row className="my-4 px-3">
                                    <FaqContainer isDesktop={isDesktop} />
                                </Row>
                            </Row>
                        </Container>
                    </>
                )
            }}
        </MediaQuery>
    );
}

export default Faq;