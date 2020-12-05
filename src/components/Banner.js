import React/*, { useState }*/ from 'react';
// import banner from "../assets/img/hero/hero-1.jpg";
import "./BannerItem.css";
import Carousel from 'nuka-carousel';
import BannerItem from "./BannerItem";
import {GET_BANNERS} from "../gql/banner";
import {useQuery} from '@apollo/client';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

function BannerLoadingPlaceHolder(props) {
    const {isDesktop} = props;

    return (
        <SkeletonTheme color="#FFFFFF" highlightColor="#e3e3e3">
            <div className="hero__item set-bg" style={{backgroundColor: "#b3b1b1"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="hero__text">
                                <h5>Venergio</h5>
                                <Skeleton width={isDesktop ? 400 : 250} height={40} className="mb-1"/>
                                <Skeleton width={isDesktop ? 400 : 250} height={40} className="mt-1"/>
                                <br/>
                                <Skeleton width={isDesktop ? 200 : 100} height={40} className="mt-3"/>
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
        </SkeletonTheme>
    )
}

function Banner(props) {
    const [index, setIndex] = React.useState(0);
    const {isDesktop} = props;
    const updateIndex = (param) => {
        setIndex(param);
    }
    React.useEffect(() => {

        setTimeout(() => {
            try {
                this._carousel.setDimensions(null)
            } catch (err) {
                // sometimes it crashes in chrome, pristine error handling here
            }
        }, 200);
    }, [])


    const {loading, error, data} = useQuery(GET_BANNERS);
    if (loading) return (
        <BannerLoadingPlaceHolder isDesktop={isDesktop}/>);
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    const length = data.getBanners.length;
    let banners = data.getBanners;
    banners = banners.slice().sort((a, b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0));
    return (
        <section className="hero-section">
            <Carousel
                afterSlide={slideIndex => updateIndex(slideIndex)}
                autoplay={length > 1 ? true : false}
                wrapAround={true}
                initialSlideHeight={800}
                pauseOnHover={false}
                autoplayInterval={5000}
                slideIndex={index}
                heightMode="auto"
                renderCenterLeftControls={() => (
                    null
                )}
                renderCenterRightControls={() => (
                    null
                )}
                renderBottomCenterControls={({goToSlide}) => (
                    <div>
                        <ul className="banner-controller">
                            {
                                banners.map((item, idx) => (
                                        item.publish ?
                                            <button
                                                onClick={
                                                    () => {
                                                        goToSlide(idx);
                                                        updateIndex(idx)
                                                    }
                                                }
                                                className={`${index === idx ? "banner-dot-active" : "banner-dot "}`}
                                                key={`banner-dot-${idx}`}
                                            >
                                                <span></span>
                                            </button> : ""
                                    )
                                )
                            }
                        </ul>
                    </div>
                )}
                getControlsContainerStyles={(key) => {
                    switch (key) {
                        case 'BottomCenter':
                            return {
                                bottom: isDesktop ? "5rem" : "2.5rem"
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
                    banners.map((item, idx) => {
                        return item.publish ?
                            <BannerItem isDesktop={isDesktop} item={item} key={`banner-${idx}`}/> : "";
                    })
                }
            </Carousel>
        </section>
    );
}

export default Banner;

