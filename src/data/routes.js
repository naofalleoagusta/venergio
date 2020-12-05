import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Catalog = React.lazy(() => import("../pages/Catalog"));
const Faq = React.lazy(() => import("../pages/Faq"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Blog = React.lazy(() => import("../pages/Blog"));
const BlogDetail = React.lazy(() => import("../pages/BlogDetail"));
const Error404 = React.lazy(() => import("../pages/Error404"));

const routes = [
    {
        path: "/",
        exact: true,
        name: "home",
        component: Home
    },
    {
        path: "/tentang-kami",
        exact: true,
        name: "tentang kami",
        component: About
    },
    {
        path: "/layanan-kami",
        exact: true,
        name: "layanan kami",
        component: Catalog
    },
    {
        path: "/pusat-bantuan",
        exact: true,
        name: "pusat bantuan",
        component: Faq
    },
    {
        path: "/kontak",
        exact: true,
        name: "kontak",
        component: Contact
    },
    {
        path: "/blog",
        exact: true,
        name: "blog",
        component: Blog
    },
    {
        path: "/404",
        exact: true,
        name: "404 Not Found",
        component: Error404
    },
    {
        path: "/blog/post/:slug",
        exact: true,
        name: "blog",
        component: BlogDetail
    }
];

export default routes;