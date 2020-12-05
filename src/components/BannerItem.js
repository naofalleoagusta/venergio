import React/*, { useState }*/ from 'react';
// import banner from "../assets/img/hero/hero-1.jpg";
import "./BannerItem.css";
import { BACK_END_URL } from '../data/url';
import {Link} from "react-router-dom";

function BannerItem(props) {
    const{item,isDesktop}=props;
    return (
        <div className="hero__item set-bg" style={{ backgroundImage: `url('${BACK_END_URL}${item.cover_image}')` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="hero__text">
                            <h5>Venergio</h5>
                            <h2 className={`${isDesktop?"w-75":""}`}>{item.title}</h2>
                            <Link to="/layanan-kami" className="primary-btn">Produk Kami</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        {/* <div className="hero__img">
                            <img src={require("../assets/img/hero/hero-right.png")} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerItem;

