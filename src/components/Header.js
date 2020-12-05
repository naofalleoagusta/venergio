import React, { useState } from 'react';
import "../assets/style/elegant-icons.css";
import IMAGES from "../data/images";
import "./Header.css";
import { withRouter, Link } from "react-router-dom";
import scrollTop from "../data/scrollTop";

function HeaderItem(props) {
    return (
        <>
            <li className={`${props.curPath === props.path ? "active" : ""}`}>
                <Link
                    to={props.path}
                    onClick={props.onClick}>
                    {props.name}
                </Link>
            </li>
        </>
    )
}


function Header(props) {
    const [showCanvas, setShowCanvas] = useState(false);
    const updateShowCanvas = () => {
        setShowCanvas(!showCanvas);
    }
    let path = props.location.pathname;

    return (
        <>
            <div className={`offcanvas__menu__overlay ${showCanvas ? "active" : ""}`} onClick={() => { updateShowCanvas() }}></div>
            <div className={`offcanvas__menu__wrapper ${showCanvas ? "show__offcanvas__menu" : ""}`}>
                <div className="canvas__close" onClick={() => { updateShowCanvas() }}>
                    <i className="far fa-times-circle" style={{ fontSize: 'larger' }}></i>
                </div>
                <div className="offcanvas__logo">
                    <Link to="/"><img className="img-logo" src={IMAGES.logo} alt="" /></Link>
                </div>
                <div id="mobile-menu-wrap">
                    <div className="slicknav_menu">
                        <Link to="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></Link><nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <HeaderItem curPath={path} path="/" name="Beranda" onClick={() => { updateShowCanvas(); scrollTop(); }} />
                                <HeaderItem curPath={path} path="/tentang-kami" name="Tentang Kami" onClick={() => { updateShowCanvas(); scrollTop(); }} />
                                <HeaderItem curPath={path} path="/layanan-kami" name="Layanan Kami" onClick={() => { updateShowCanvas(); scrollTop(); }} />
                                <HeaderItem curPath={path} path="/blog" name="Blog" onClick={() => { updateShowCanvas(); scrollTop(); }} />
                                {/* <HeaderItem curPath={path} path="/faq" name="Faq" onClick={() => { updateShowCanvas(); scrollTop(); }} /> */}
                                <HeaderItem curPath={path} path="/kontak" name="Kontak" onClick={() => { updateShowCanvas(); scrollTop(); }} />
                            </ul>
                        </nav></div>
                </div>
                <div className="offcanvas__info">
                    <ul>
                        <li><span className="icon_phone"></span> 088225111268</li>
                        <li><span className="fas fa-envelope"></span> cs@venergio.com</li>
                    </ul>
                </div>
            </div>
            <header className="header-section">
                <div className="header__info2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="header__info-left">
                                    <ul>
                                        <li><span className="icon_phone"></span> 088225111268</li>
                                        <li><span className="fas fa-envelope"></span> cs@venergio.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link to="/"><img className="img-logo" src={IMAGES.logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <nav className="header__menu">
                                <ul>
                                    <HeaderItem curPath={path} onClick={() => scrollTop()} path="/" name="Beranda" />
                                    <HeaderItem curPath={path} onClick={() => scrollTop()} path="/tentang-kami" name="Tentang Kami" />
                                    <HeaderItem curPath={path} onClick={() => scrollTop()} path="/layanan-kami" name="Layanan Kami" />
                                    <HeaderItem curPath={path} onClick={() => scrollTop()} path="/blog" name="Blog" />
                                    {/* <HeaderItem curPath={path} onClick={() => scrollTop()} path="/faq" name="Faq" /> */}
                                    <HeaderItem curPath={path} onClick={() => scrollTop()} path="/kontak" name="Kontak" />
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="canvas__open" onClick={() => (updateShowCanvas())}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
}

export default withRouter(Header);
