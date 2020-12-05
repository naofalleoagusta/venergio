import React/*, { useState }*/ from 'react';
import "./Catalog.css";
import PageTitle from "../components/PageTitle";
import IMAGES from "../data/images";
import Carousel from 'nuka-carousel';
import MediaQuery from "react-responsive";


function Catalog() {
    const [index, setIndex] = React.useState(0);

    const updateIndex = (param) => {
        setIndex(param);
    }
    return (<>
        <PageTitle title="Produk Kami" />
        <div className="site-section">
            <div className="container">
                <div className="row align-items-md-center ">
                    <div className="col-md-6 mb-5 mb-lg-0 position-relative">
                        <img src={IMAGES.catalog.bimosi} className="img-fluid" alt="bimosi" />
                    </div>
                    <div className="col-md-5 ml-auto">
                        <h5 className="section-sub-title">BIMOSI</h5>
                        <h2 className="section-title mb-3">Apa itu BIMOSI ?</h2>
                        <p className="mb-4" style={{ color: "#808080" }}>
                            BIMOSI merupakan seperangkat yang digunakan
                            sebagai asisten para pelaku usaha agar dapat
                            mempermudah menjaga kestabilan penggunaan energi
                            terbarukan setiap saat.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">

            <div className="row mb-5">
                <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
                    <img src={IMAGES.catalog.wind_turbine} alt="wind-turbine" className="img-fluid" />
                </div>
                <div className="col-md-6 order-md-1" data-aos="fade">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <p className="lead">
                                BIMOSI hadir untuk para pengusaha/UMKM
                                yang mengembangkan usahanya di area pantai serta para pengusaha
                                yang memiliki keterbatasan akses dalam menjaga ketersediaan listik
                                dalam waktu 24 jam penuh.
                            </p>
                        </div>
                        <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                            <div className="unit-4">
                                <div>
                                    <h5>Untuk Pembangkit Listrik</h5>
                                    <p style={{ color: "#808080" }}>
                                        BIMOSI dapat digunakan pada pembangkit listrik
                                        tenaga angin dan pembangkit listrik tenaga matahari
                                        agar mendapatkan informasi teknis yang mudah dipahami
                                        oleh pengguna setiap saat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                            <div className="unit-4">

                                <div>
                                    <h5>Memberi Informasi</h5>
                                    <p style={{ color: "#808080" }}>
                                        BIMOSI memberikan informasi
                                        kondisi baterai, akumulasi penghematan listrik, sistem siaga,
                                        dan dapat diakses setiap saat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-5 mb-5">
                <div className="col-xl-12 mb-4">
                    <div className="bradcam_text text-center">
                        <h2 style={{ fontWeight: 700 }}>Contoh Produk</h2>
                    </div>
                </div>
                <div className="col-xl-12 mb-5">
                    <div className="bradcam_text text-center" style={{color:"#808080"}}>
                        Dibawah ini merupakan contoh sistem kerja BIMOSI dalam
                        <br/> memberikan informasi pada pengguna
                    </div>
                </div>
                <div className="col-xl-12 mb-5 mt-3">

                    <div className="container d-flex justify-content-center mb-5">
                        <MediaQuery minWidth={768}>
                            {isDesktop => {
                                return (
                                    <Carousel
                                        afterSlide={slideIndex => updateIndex(slideIndex)}
                                        autoplay={true}
                                        wrapAround={true}
                                        autoplayInterval={3000}
                                        slideIndex={index}
                                        heightMode="max"
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
                                                        [0,1,2].map((item, idx) => (
                                                            <button
                                                                onClick={
                                                                    () => {
                                                                        goToSlide(idx);
                                                                        updateIndex(idx)
                                                                    }
                                                                }
                                                                className={`${idx === index ? "study-case-dot-active" : "study-case-dot "}`}
                                                                key={`study-case-dot-${idx}`}
                                                            >
                                                                <span></span>
                                                            </button>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )}
                                        slidesToShow={isDesktop ? 3 : 1}
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
                                        <img src={IMAGES.catalog.case1} alt="wind-turbine" className="img-fluid px-3" />
                                        <img src={IMAGES.catalog.case2} alt="wind-turbine" className="img-fluid px-3" />
                                        <img src={IMAGES.catalog.case3} alt="wind-turbine" className="img-fluid px-3" />
                                    </Carousel>
                                );
                            }}
                        </MediaQuery>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 mb-5">
                    <img src={IMAGES.catalog.hero} alt="wind-turbine" className="img-fluid" />
                </div>
            </div>
        </div>
    </>)
}
export default Catalog;