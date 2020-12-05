import React/*, { useState }*/ from 'react';
import "./About.css";
// import studyBanner from "../assets/img/banner/study_banner.png";
import Member from "../components/Member";
import IMAGES from "../data/images";
import PageTitle from "../components/PageTitle";
import Carousel from 'nuka-carousel';
import AchievementCard from "../components/AchievementCard";
import MediaQuery from "react-responsive";
import { GET_ACHIEVEMENTS } from "../gql/achievement";
import { useQuery } from '@apollo/client';
import { BACK_END_URL } from "../data/url";
import { GET_TEAM } from "../gql/team";
import { Col } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const studyBanner = "https://ik.imagekit.io/vp9bgybmpm/bg_achievement_1__Us5y7fty1Q1.png"

function AchievementContainer() {
    const [index, setIndex] = React.useState(0);
    const updateIndex = (param) => {
        setIndex(param);
    }

    const { loading, error, data } = useQuery(GET_ACHIEVEMENTS);
    if (loading) {
        return (
            <SkeletonTheme color="#a8a8a7" highlightColor="#b8b4b4">
                <div className="justify-content-center row mb-5">
                    {

                        <MediaQuery minWidth={992}>
                            {isDesktop => {
                                if (isDesktop) {
                                    return (
                                        [0, 1, 2,].map(item => (
                                            <div className="col-xs-12 col-lg-4" key={`skeleton-ach-${item}`}>
                                                <Skeleton height={486} width={300} className="" />
                                            </div>
                                        ))
                                    );
                                }
                                else {
                                    return (

                                        <div className="col-xs-12">
                                            <Skeleton height={486} width={300} className="" />
                                        </div>)
                                }
                            }}
                        </MediaQuery>
                    }
                </div>
            </SkeletonTheme>
        );
    }
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    let achievements = data.getAchievements;
    let initWidth = 380;
    let achLength = achievements.length;
    let width = achLength < 3 ? achLength * initWidth : 1140;
    let slidesToShow = achLength < 3 ? achLength : 3;

    if (achLength > 0) {
        return (
            <div className="container d-flex justify-content-center">
            <MediaQuery minWidth={768}>
                {isDesktop => {
                    return (
                        <Carousel
                            afterSlide={slideIndex => updateIndex(slideIndex)}
                            autoplay={true}
                            wrapAround={true}
                            initialSlideHeight={520}
                            width={width}
                            autoplayInterval={3000}
                            heightMode="auto"
                            slideIndex={index}
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
                                            isDesktop ? achievements.map((item, idx) => (
                                                achLength > 3 && idx % 3 === 0 ? <button
                                                    onClick={
                                                        () => {
                                                            goToSlide((idx));
                                                            updateIndex((idx))
                                                        }
                                                    }
                                                    className={`${(index >= idx && index < idx + 3) ? "ach-banner-dot-active" : "ach-banner-dot "}`}
                                                    key={`ach-banner-dot-${idx}`}
                                                >
                                                    <span></span>
                                                </button> : ""
                                            )) : achievements.map((item, idx) => (
                                                <button
                                                    onClick={
                                                        () => {
                                                            goToSlide(idx);
                                                            updateIndex(idx)
                                                        }
                                                    }
                                                    className={`${idx === index ? "ach-banner-dot-active" : "ach-banner-dot "}`}
                                                    key={`ach-banner-dot-${idx}`}
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
                        >
                            {
                                achievements.map((item, idx) =>
                                    (item.enabled ?
                                        <AchievementCard
                                            photo={item.cover_image}
                                            title={item.name}
                                            desc={item.desc}
                                            key={`ach-card-${idx}`}
                                        /> : ""
                                    ))
                            }
                        </Carousel>
                    );
                }}
            </MediaQuery>
            </div>
        )
    }
    else {
        return (<div className="container">
            <div className={`row`}>
                <Col xs={12} className="d-flex align-items-center" style={{ height: "300px" }}>
                    <div className="text-center w-100">
                        <h2 style={{ padding: "1rem 5rem", fontWeight: 700, color: "white" }} className="text-center">
                            Konten Prestasi Akan Segera Hadir.
                </h2>
                        <p style={{ color: "white" }}>
                            Tim Admin sedang menyiapkan konten prestasi.
                </p>
                    </div>
                </Col>
            </div>
        </div>)
    }
}

function MemberContainer() {
    const { loading, error, data } = useQuery(GET_TEAM);
    let teams = [];
    if (loading) {
        return (<SkeletonTheme color="#a8a8a7" highlightColor="#b8b4b4">
            {

                <MediaQuery minWidth={992}>
                    {isDesktop => {
                        if (isDesktop) {
                            return (

                                <div className="justify-content-center row mb-5">
                                    {[0, 1, 2,].map(item => (
                                        <div className="col-xs-12 col-lg-4 " key={`skeleton-ach-${item}`}>
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-12">
                                                    <Skeleton height={300} width={300} className="" />
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <Skeleton height={30} width={300} />
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <Skeleton height={30} width={300} />
                                                </div>

                                            </div>
                                        </div>
                                    ))}</div>
                            );
                        }
                        else {
                            return (
                                <div className="row">
                                    <div className="col-xs-12 col-lg-4 ">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-12">
                                                <Skeleton height={300} width={window.innerWidth-30} className="" />
                                            </div>
                                            <div className="col-12 mt-2">
                                                <Skeleton height={30} width={window.innerWidth-30} />
                                            </div>
                                            <div className="col-12 mt-2">
                                                <Skeleton height={30} width={window.innerWidth-30} />
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                        }
                    }}
                </MediaQuery>
            }
        </SkeletonTheme>
        );
    }
    if (!loading && !error) {
        teams = data.getTeams;
    }
    return (

        <div className="row">
            {teams.map(item => (
                <Member name={item.name} role={item.position}
                    photo={item.cover_image ? BACK_END_URL + item.cover_image : IMAGES.member.p5}
                    linkedIn={item.linkedin !== "none" ? item.linkedin : ""} />
            ))}

        </div>
    )

}

function About() {
    return (
        <>
            <PageTitle title="Tentang Kami" />

            <div className="about-details-area section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-tittle">
                                <h2>Tentang Kami</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-details mb-50">
                                <p className="pear1">
                                    Venergio merupakan Startup binaan Inkubator New Energy Nexus pada bulan april 2020.
                                </p>
                                <p className="pear2">
                                    Kami lahir dari sebuah ide kompetisi yang diadakan oleh RISTEK Dikti
                                    dengan judul “Vertical Wind Turbine atau VENA Smart Energy” pada tahun 2019 lalu,
                                    kami tergerak untuk membuat pembangkit listrik tenaga angin dari melihat wilayah
                                    indonesia
                                    yang merupakan negara kepulauan dimana potensi angin cukup untuk mendukung
                                    penyebaran
                                    pembangkit listrik hingga keseluruh wilayah Indonesia.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-tittle">
                                <h2>Misi</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-details">
                                <p className="pear1">
                                    Kami menghadirkan sebuah solusi untuk menggunakan energi terbarukan agar
                                    lebih mudah.
                                </p>
                                <p className="pear2">
                                    Kami mengkolaborasikan pembangkit listrik dengan
                                    Internet of Things agar lebih memudahkan anda dalam melakukan
                                    aktivitas penggunaan listrik sehari hari dengan mudah dan nyaman.
                                    Kami berharap mejadi bagian dari energi bersih dunia. Kami akan terus
                                    mendukung anda dalam meningkatkan pengelolaan kelistrikan usaha anda,
                                    serta memudahkan anda dalam melakukan rekapan pengeluaran listrik agar
                                    tetap selalu menjaga kebutuhan listrik anda sepanjang waktu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case_study_area" style={{
                backgroundImage: `url(${studyBanner})`,
                backgroundSize: "100% 100%"

            }}>
                <div className="patrn_1 d-none d-lg-block">
                    <img src={require("../assets/img/pattern/patrn_1.png")} alt="" />
                </div>
                <div className="patrn_2 d-none d-lg-block">
                    <img src={require("../assets/img/pattern/patrn.png")} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title text-center mb-95 white_text">
                                <h2 className="py-2">Prestasi Kami</h2>
                                <p className="py-2">Kami Venergio senantiasa membantu pemerataan energi di Indonesia <br />
                                Ini adalah contoh bukti kerja kami. </p>
                            </div>
                        </div>
                    </div>
                    <AchievementContainer />
                </div>
            </div>
            <div className="container mb-5 pb-5">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="team_section text-center mb-95">
                            <h2 className="py-2">Tim Kami</h2>
                        </div>
                    </div>
                </div>
                <MemberContainer />
            </div>
        </>
    )
}


export default About;
