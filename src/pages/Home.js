import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import scrollTop from "../data/scrollTop";
import Banner from "../components/Banner";
import MediaQuery from "react-responsive";
import Portofolio from "../components/Portofolio";


const solar1 = "https://ik.imagekit.io/vp9bgybmpm/25__1__QvJ-gzOt9.jpg";
const solar2 = "https://ik.imagekit.io/vp9bgybmpm/1104__1__dqB1votTU.jpg";


function Home() {

    return (
        <>
            <MediaQuery minWidth={768}>
                {isDesktop => {
                    return (
                        <>
                            <Banner isDesktop={isDesktop} />
                            <div className="container home-hero-1">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-6 my-3 px-3">
                                        <div className="faq_ask">
                                            <h2>
                                                Solusi kehandalan energi terbarukan untuk membantu
                                                pengelolaan usaha, rumah tangga, dan layanan publik
                                                dalam pengawasan secara real time
                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 my-3 px-3">
                                        <div className="accordion_thumb">
                                            <img src={solar1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container home-hero-2">
                                <div className="row">
                                    <div className="col-xl-5 col-md-5 px-3">
                                        <div className="accordion_thumb">
                                            <img src={solar2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-7 px-3">
                                        <div className="company_info">
                                            <h2 className="pt-3 pb-2 mt-4">BIMOSI</h2>
                                            <p className="py-3"> Pemanfaatan aplikasi sistem integrasi
                                            pembangkit listrik dengan internet of things untuk
                                            mempermudah penggunaan energi terbarukan
                                </p>

                                            <Link onClick={() => scrollTop()} to="/layanan-kami" className="boxed-btn3">Layanan Kami</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Portofolio/>
                            <ContactForm isHome={true}/>
                        </>
                    )
                }}
            </MediaQuery>
        </>

    );
}

export default Home;
