import React/*, { useState }*/ from 'react';
// import banner from "../assets/img/hero/h2_hero.jpg";
import "./PageTitle.css";

function PageTitle(props) {
    return (
        <>
            <div className="hero-area hero-height2 d-flex align-items-center" style={{ backgroundImage: `url('https://ik.imagekit.io/vp9bgybmpm/608_MD612dPbj.jpg')` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center pt-100">
                                <h2>{props.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageTitle;