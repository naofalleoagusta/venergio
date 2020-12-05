import React/*, { useState }*/ from 'react';
import "./Catalog.css";
import PageTitle from "../components/PageTitle";
import { GET_BLOGS } from "../gql/blog";
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { BACK_END_URL } from '../data/url';
import moment from "moment";
import "./Blog.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import month from "../data/months";

// import IMAGES from "../data/images";

function BlogCard({ slug, title, time, image }) {
    let timezone = new Date().getTimezoneOffset();
    timezone = (timezone * -1) / 60;
    let date = moment(new Date(time));
    date = timezone > 0 ? date.add(timezone, 'hours') : timezone === 0 ? date : date.subtract(timezone, 'hours');

    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog__item">
                <div className="blog__pic set-bg" style={{ backgroundImage: `url('${image ? BACK_END_URL + image : "https://ik.imagekit.io/vp9bgybmpm/608_MD612dPbj.jpg"}')` }}>
                    <div className="label">Blog</div>
                </div>
                <div className="blog__text">
                    <h5><Link to={`/blog/post/${slug}`}>{title}</Link></h5>
                    <ul>
                        <li><i className="fas fa-user"></i> Admin </li>
                        <li><i className="far fa-clock"></i>{`${date.date()} ${month[date.month()]} ${date.year()}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function BlogPlaceHolder() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog__item">
                <Skeleton height={253} width={360} />
                <div className="blog__text">
                    <h5>
                        <Skeleton height={28} width={281} /></h5>
                    <ul>
                        <li>
                            <Skeleton height={30} width={81} /></li>
                        <li>
                            <Skeleton height={30} width={110} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function BlogContainer() {
    const [page, setPage] = React.useState(1);
    const updatePage = (param) => {
        setPage(param);
    }
    const { loading, error, data } = useQuery(GET_BLOGS, {
        variables: { page: page, limit: 6 }, fetchPolicy: "cache-and-network"
    });
    if (loading) return (
        <SkeletonTheme color="#a8a8a7" highlightColor="#b8b4b4">
            <div className="d-flex justify-content-center row">

                {
                    [0, 1, 2, 3, 4, 5].map(item => (<BlogPlaceHolder key={`skeleton-blog-${item}`}  />))
                }
                <Col xs={12} className="p-4 my-3 d-flex justify-content-center">
                    {
                        [0, 1, 2, 3].map(item => (
                            <Skeleton circle={true} height={30} width={30} style={{ margin: "0 2px" }} key={`skeleton-paginator-${item}`} />
                        ))
                    }
                </Col>
            </div>
        </SkeletonTheme>);
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    let blog = data.getPosts;
    let totalPages = Math.ceil(blog.length / 6);
    let blogLength = blog.data.length;
    let paginator = new Array(totalPages);
    paginator.fill(0);
    if (blogLength > 0) {
        return (
            <div className={`row`}>
                {
                    blog.data.map((item,idx) => (
                        item.publish ? <BlogCard title={item.title} slug={item.slug} image={item.cover_image} time={item.created_at} key={`blog-card-${idx}`} /> : ""
                    ))
                }
                <Col xs={12} className="p-4 my-3 d-flex justify-content-center">
                    {
                        paginator.map((item, index) => (
                            <button
                                onClick={
                                    () => {
                                        updatePage(index + 1)
                                    }
                                }
                                className={index + 1 === page ? "paginator-active" : "paginator "}
                                key={`paginator-${index}`}
                            >
                                {index + 1}
                            </button>
                        ))
                    }
                </Col>
            </div>
        )
    }
    else {
        return (<div className={`row`}>
            <Col xs={12} className="d-flex align-items-center" style={{ height: "500px" }}>
                <div className="text-center w-100">
                    <h2 style={{ padding: "1rem 5rem", fontWeight: 700 }} className="text-center">
                        Konten Blog Akan Segera Hadir!
                </h2>
                    <p>
                        Tim Admin sedang menyiapkan artikel menarik untuk Anda!
                </p>
                </div>
            </Col>
        </div>)
    }
}

function Blog() {
    return (<>
        <PageTitle title="Blog" />
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <BlogContainer />
                    </div>

                </div>
            </div>
        </section>
    </>)
}
export default Blog;