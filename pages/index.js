import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is the best",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is the best",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is the best",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is the best",
    date: "2022-02-10",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
