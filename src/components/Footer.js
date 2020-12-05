import React from 'react';
import "../assets/style/elegant-icons.css";
import "./Footer.css";
// import footer from "../assets/img/footer.png";
import IMAGES from "../data/images";
import { Link } from "react-router-dom";
import scrollTop from "../data/scrollTop";
import { Row, Col } from "react-bootstrap";
import { GET_TOP2_BLOGS } from "../gql/blog";
import { useQuery } from '@apollo/client';

const footer = "https://ik.imagekit.io/vp9bgybmpm/footer.31e82bd0__DEUCJO3t.png";

function FooterBlog() {
    const { loading, error, data } = useQuery(GET_TOP2_BLOGS);
    if (loading) return (
        <div>loading</div>);
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    let blog = data.getTopTwoPosts;
    return (
        <div className="footer__text-widget">
            <h5>BLOG</h5>
            <ul>
                {blog.map((item, idx) => (
                    <li key={`blog-item-${idx}`}>
                        <Link onClick={() => scrollTop()} to={`/blog/post/${item.slug}`}
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer__top">
                </div>
                <div className="footer__text set-bg" style={{ backgroundImage: `url('${footer}')` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer__text-about">
                                    <div className="footer__logo">
                                        <Link to="/"><img src="https://ik.imagekit.io/vp9bgybmpm/venergio_KnYkqlzbO0G.png" className="logo-footer" alt="" /></Link>
                                    </div>
                                    {/* <p>Venergio merupakan Startup binaan inkubator New Energy Nexus pada bulan April 2020 </p> */}
                                    <p>
                                        Venergio is a renewable energy start-up that develops wind,
                                        solar and energy management as a form of support for the
                                        needs of the community in the small and medium business /
                                        small and medium industry sectors, tourism, households and
                                        public services / village development.
                                        With the fulfillment of access to electricity in the community,
                                        the wheels of the economy and development are expected to run smoothly.
                                    </p>
                                    <div className="footer__social">
                                        <a href="https://www.facebook.com/venergio.venergio" target="_blank"
                                            rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                        {/* <Link onClick={() => scrollTop()} to="/"><i className="fab fa-twitter"></i></Link> */}
                                        
                                        <a href="https://www.youtube.com/channel/UCxbtQAbIAemSSVJ-nNUDFgQ" target="_blank"
                                            rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                        <a href="https://www.instagram.com/venergio.indonesia/" target="_blank"
                                            rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                        <a href="https://api.whatsapp.com/send?phone=6288225111268" target="_blank"
                                            rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer__text-widget">
                                    <h5>Layanan</h5>
                                    <ul>
                                        <li><Link onClick={() => scrollTop()} to="/">Beranda</Link></li>
                                        <li><Link onClick={() => scrollTop()} to="/tentang-kami">Tentang Kami</Link></li>
                                        <li><Link onClick={() => scrollTop()} to="/layanan-kami">Layanan Kami</Link></li>
                                        <li><Link onClick={() => scrollTop()} to="/blog">Blog</Link></li>
                                        <li><Link onClick={() => scrollTop()} to="/pusat-bantuan">Pusat Bantuan</Link></li>
                                        <li><Link onClick={() => scrollTop()} to="/kontak">Kontak</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <FooterBlog />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer__text-widget">
                                    <h5>HUBUNGI KAMI</h5>
                                    <ul className="footer__widget-info">
                                        <li><span className="fa fa-map-marker"></span> 128 Bawen 26/06 Kotagede<br />
                                    Yogyakarta 55173</li>
                                        <li><span className="fa fa-mobile"></span>088225111268</li>
                                        <li><span className="fa fa-headphones"></span>cs@venergio.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <Row className="footer__logo ">
                                    <Col xs={12} className="nexus-text my-4 ">
                                        This Website is supported by New Energy Nexus as a part of our effort to help renewable energy startup grow.
                                        </Col>
                                    <Col xs={12} className="nexus-logo-container mb-2 px-3 ">
                                        <a href="https://www.newenergynexus.com/region/indonesia/" target="_blank"
                                            rel="noopener noreferrer"><img src={IMAGES.logoNexus} className="logo-nexus" alt="" /></a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="footer__text-copyright">
                            <p>
                                &copy; {new Date().getFullYear()} Venergio.com | Site by <a className="kadosoft-link" href="https://kadosoft.co.id/" target="_blank"
                                    rel="noopener noreferrer">KadoSoft.co.id</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
