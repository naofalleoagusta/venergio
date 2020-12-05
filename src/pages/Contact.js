import React/*, { useState }*/ from 'react';
import PageTitle from "../components/PageTitle";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <PageTitle title="Kontak" />

            <section className="contact-section spad mb-5">
                <div className="container my-3">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact__text">
                                <h3>Info Kontak</h3>
                                <p>Kami siap membantu Anda, hubungi kami</p>
                                <ul>
                                    <li>
                                        <span className="fa fa-map-marker"></span>
                                        <h5>Office</h5>
                                        <p>128 Bawen 26/06 Kotagede, Yogyakarta 55173</p>
                                    </li>
                                    <li>
                                        <span className="fa fa-mobile"></span>
                                        <h5>Phone Number</h5>
                                        <p>0882-2511-1268</p>
                                    </li>
                                    <li>
                                        <span className="fa fa-headphones"></span>
                                        <h5>Support</h5>
                                        <p>cs@venergio.com</p>
                                    </li>
                                </ul>
                                <div className="contact__social">
                                    {/* <a><i className="fab fa-instagram"></i></a>  */}
                                    <a href="https://www.facebook.com/venergio.venergio" target="_blank"
                                        rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.youtube.com/channel/UCxbtQAbIAemSSVJ-nNUDFgQ" target="_blank"
                                        rel="noopener noreferrer" className="youtube"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/venergio.indonesia/" target="_blank"
                                        rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=6288225111268" target="_blank"
                                        rel="noopener noreferrer" style={{color:"#455964"}}><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="map">
                                <iframe
                                    src="https://maps.google.com/maps?q=yogyakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    height="515" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"
                                    title="myFrame"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm isHome={false} />
        </>
    )
}

export default Contact;