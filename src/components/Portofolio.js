import React/*, { useState }*/ from 'react';
// import banner from "../assets/img/hero/h2_hero.jpg";
import { useQuery } from '@apollo/client';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { GET_PORTOFOLIOS } from "../gql/portofolio";
import { BACK_END_URL } from '../data/url';
import Carousel from 'nuka-carousel';
import MediaQuery from "react-responsive";
import { Col } from "react-bootstrap";
import "./Portofolio.css";


function PortofolioCard({ image, title, desc }) {
    return (
        <div className="single_study text-center white_single_study px-3">
            <div className="thumb">
                <img src={`${BACK_END_URL}${image}`} alt="" />
            </div>
            <div className="subheading-home white_subheading px-3">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}
function PortofolioContainer() {
    const [index, setIndex] = React.useState(0);

    const updateIndex = (param) => {
        setIndex(param);
    }
    const { loading, error, data } = useQuery(GET_PORTOFOLIOS);
    if (loading) return (
        <SkeletonTheme color="#a8a8a7" highlightColor="#b8b4b4">
            <div className="d-flex justify-content-center row mb-5">

                {

                    <MediaQuery minWidth={992}>
                        {isDesktop => {
                            if (isDesktop) {
                                return (
                                    [0, 1, 2,].map(item => (
                                        <div className="col-xs-12 col-lg-3" key={`skeleton-port-${item}`}>
                                            <Skeleton height={486} width={300} className="px-3" />
                                        </div>
                                    ))
                                );
                            }
                            else {
                                return (
                                    
                                    <div className="col-xs-12">
                                        <Skeleton height={486} width={300} className="px-3" />
                                    </div>)
                            }
                        }}
                    </MediaQuery>
                }
            </div>
        </SkeletonTheme>);
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    let portofolios = data.getPortofolios;
    let initWidth = 380;
    let portoLength = portofolios.length;
    let width = portoLength < 3 ? portoLength * initWidth : 1140;
    let slidesToShow = portoLength < 3 ? portoLength : 3;
    if (portoLength > 0) {
        return (
            <div className="case_study_area white_case_study mb-5">
                <div className="container d-flex justify-content-center">
                    <MediaQuery minWidth={992}>
                        {isDesktop => {
                            return (
                                <Carousel
                                    afterSlide={slideIndex => updateIndex(slideIndex)}
                                    autoplay={portoLength < 3 ? false : true}
                                    wrapAround={true}
                                    width={isDesktop ? width : window.innerWidth}
                                    initialSlideHeight={isDesktop ? 500 : 515}
                                    autoplayInterval={3000}
                                    slideIndex={index}
                                    heightMode="auto"
                                    renderCenterLeftControls={() => (
                                        null
                                    )}
                                    renderCenterRightControls={() => (
                                        null
                                    )}
                                    renderBottomCenterControls={({ goToSlide }) => (
                                        <div>
                                            <ul className="banner-controller">
                                                {
                                                    isDesktop ? portofolios.map((item, idx) => (
                                                        portoLength > 3 && idx % 3 === 0 ? <button
                                                            onClick={
                                                                () => {
                                                                    goToSlide((idx));
                                                                    updateIndex((idx))
                                                                }
                                                            }
                                                            className={`${(index >= idx && index < idx + 3) ? "port-banner-dot-active" : "port-banner-dot "}`}
                                                            key={`port-banner-dot-${idx}`}
                                                        >
                                                            <span></span>
                                                        </button> : ""
                                                    )) : portofolios.map((item, idx) => (
                                                        <button
                                                            onClick={
                                                                () => {
                                                                    goToSlide(idx);
                                                                    updateIndex(idx)
                                                                }
                                                            }
                                                            className={`${idx === index ? "port-banner-dot-active" : "port-banner-dot "}`}
                                                            key={`port-banner-dot-${idx}`}
                                                        >
                                                            <span></span>
                                                        </button>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )}
                                    slidesToShow={isDesktop ? slidesToShow : 1}
                                    getControlsContainerStyles={(key) => {
                                        switch (key) {
                                            case 'BottomCenter':
                                                return {
                                                    bottom: isDesktop ? "-2rem" : "-1.5rem"
                                                };
                                            default:
                                                // will apply all other keys
                                                return {
                                                    backgroundColor: "blue",
                                                };
                                        }
                                    }}
                                    className="justify-content-center"
                                >
                                    {portofolios.map((item, idx) => item.enable ? (<PortofolioCard image={item.cover_image} title={item.name} desc={item.desc} key={`port-card-${idx}`} />) : "")}
                                </Carousel>
                            );
                        }}
                    </MediaQuery>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className={`row`}>
                    <Col xs={12} className="d-flex align-items-center" style={{ height: "500px", marginTop: "-100px" }}>
                        <div className="text-center w-100">
                            <h2 style={{ padding: "1rem 5rem", fontWeight: 700 }} className="text-center">
                                Konten Portofolio Akan Segera Hadir.
                </h2>
                            <p>
                                Tim Admin sedang menyiapkan portofolio.
                </p>
                        </div>
                    </Col>
                </div>
            </div>
        )
    }
}

function Portofolio() {
    return (
        <>
            <div className="bradcam_area">
                <div className="bradcam_shap">
                    <img src={require("../assets/img/ilstrator/bradcam_ils.png")} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>Portofolio</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortofolioContainer />
        </>
    )
}

export default Portofolio;