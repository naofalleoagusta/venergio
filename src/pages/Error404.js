import React/*, { useState }*/ from 'react';
import PageTitle from "../components/PageTitle";
import {Link} from "react-router-dom";
function Error404() {
    return (<>
        <PageTitle title="" />
        <section className="blog-section" style={{ padding: "200px 0 200px 0" }}>
            <div className="container">
                <div className="row">
                    <div style={{ height: "100px" }} className="col-lg-12 d-flex justify-content-center align-items-center " >
                        <h1 style={{ fontWeight: 600, color: "#c4c4c4" }}>404</h1>
                    </div>
                    <div className="col-lg-12 text-center" style={{ height: "100px" }} >
                        <p style={{ fontSize: "18px" }}>Halaman Tidak Tersedia.</p>
                        <Link to="/" className="primary-btn">Beranda</Link>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Error404;