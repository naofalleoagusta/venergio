import React/*, { useState }*/ from 'react';
import "./Catalog.css";
import PageTitle from "../components/PageTitle";
import { withRouter, Link } from "react-router-dom";
import { GET_BLOGS_BY_SLUG } from "../gql/blogDetail";
import { useQuery } from '@apollo/client';
import { Row } from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import "./BlogDetail.css";
import month from "../data/months";
import moment from "moment";
import { BACK_END_URL } from '../data/url';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { GET_BLOGS } from "../gql/blog";

function PrevNextPost({ id }) {
    const { loading, error, data } = useQuery(GET_BLOGS, {
        variables: { page: 1, limit: 5000 }, fetchPolicy: "cache-and-network"
    });
    if (loading) return (

        <div className="row">
            <div className="col">
                <Skeleton height={46} width={136} />
            </div>
            <div className="col">
                <Skeleton height={46} width={136} className=" float-right" />
            </div>
        </div>);
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    let blogs = data.getPosts.data.map((item, idx) => ({ ...item, index: idx }));
    let curBlog = blogs.filter(item => (item.id === id))[0];
    let nextItem = blogs.filter((item) => {
        let idx = curBlog.index + 1;
        idx = idx % blogs.length;
        return (item.index === idx);
    })[0]
    let prevItem = blogs.filter((item) => {
        let idx = curBlog.index;
        if (idx === 0) {
            idx = blogs.length;
        }
        idx -= 1;
        return (item.index === idx);
    })[0]
    return (
        <>
            <div className="col">
                <Link to={`/blog/post/${prevItem.slug}`} className={`site-btn text-center`}>
                    Prev Post
                </Link>
            </div>
            <div className="col">
                <Link to={`/blog/post/${nextItem.slug}`} className={`float-rigth site-btn text-center`}>
                    Next Post
                </Link>
            </div>
        </>
    )
}


function BlogDetail({ match }) {
    let slug = match.params.slug;
    const { loading, error, data } = useQuery(GET_BLOGS_BY_SLUG, {
        variables: { slug: slug }, fetchPolicy: "cache-and-network"
    });
    if (loading) return (
        <SkeletonTheme color="#a8a8a7" highlightColor="#b8b4b4">
            <section className="blog-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-1 order-lg-2">
                            <div className="blog-post">
                                <div className="blog-thumb set-bg">
                                    <Skeleton width={626} height={417} />
                                </div>
                                <Row className="d-flex align-items-center px-3 ">
                                    {/* <div className="blog-detail-label text-center my-0 mx-3">Blog</div> */}
                                    <div className="blog-detail-admin-time col-12 py-3">
                                        <ul>
                                            <li>
                                                <Skeleton width={76} height={30} /> </li>
                                            <li>/</li>
                                            <li>
                                                <Skeleton width={106} height={30} /></li>
                                        </ul>
                                    </div>
                                </Row>
                                <h2 className="py-1">
                                    <Skeleton width={300} height={50} /></h2>
                                <p className="py-3" style={{ fontWeight: 100 }}>
                                    <Skeleton count={10} /> </p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Skeleton height={46} width={136} />
                                </div>
                                <div className="col">
                                    <Skeleton height={46} width={136} className=" float-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SkeletonTheme >
    );
    if (error) {
        console.log(error);
        console.log(`Error! ${error.message}`);
        return "";
    }
    let blog = data.getPostBySlug;
    console.log(data.getPostBySlug)
    let timezone = new Date().getTimezoneOffset();
    timezone = (timezone * -1) / 60;
    let date = moment(new Date(blog.created_at));
    console.log(BACK_END_URL + blog.cover_image)
    date = timezone > 0 ? date.add(timezone, 'hours') : timezone === 0 ? date : date.subtract(timezone, 'hours');
    return (<>
        <PageTitle title="Blog Post" />
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-1 order-lg-2">
                        <div className="blog-post">
                            <div className="blog-thumb set-bg">

                                <img src={`${blog.cover_image ? BACK_END_URL + blog.cover_image : "https://ik.imagekit.io/vp9bgybmpm/608_MD612dPbj.jpg"}`} alt="gambar" />
                            </div>
                            <Row className="d-flex align-items-center px-3 ">
                                <div className="blog-detail-admin-time col-12 py-3">
                                    <ul>
                                        <li><i className="fas fa-user"></i> Admin </li>
                                        <li>/</li>
                                        <li><i className="far fa-clock"></i>{`${date.date()} ${month[date.month()]} ${date.year()}`}</li>
                                    </ul>
                                </div>
                            </Row>
                            <h2 className="py-1">{blog.title} </h2>
                            <div className="py-3" style={{ fontWeight: 100 }}>
                                {ReactHtmlParser(blog.body.replace(/font-family/gi, ""))}</div>
                        </div>
                        <div className="row">
                            <PrevNextPost id={blog.id} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default withRouter(BlogDetail);