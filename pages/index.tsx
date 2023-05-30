import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { getAllTags, getPostsForTopPage } from "../libs/notionAPI";
import SinglePost from "../components/Post/SinglePost";
import { GetStaticProps } from "next";
import Link from "next/link";
import Tag from "../components/Tag/Tag";
import Slider from "../components/slider";

export const getStaticProps: GetStaticProps = async () => {
  // const allPosts = await getAllPosts();
  // 空だと４つの記事　数字で指定することで記事の数が変わる
  const fourPosts = await getPostsForTopPage(4);
  const allTags = await getAllTags();

  return {
    props: {
      fourPosts,
      allTags,
    },
    revalidate: 60 * 60 * 24,
  };
};

const Home: NextPage = ({ fourPosts, allTags }: any) => {
  return (
    <>
      <Head>
        <title>FC Tortuga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="carousel">
        <Slider />
      </div>

      <Link
        href="/about"
        className="mb-6 lg:w-1/2 mx-auto px-5 block text-right mt-5 my-16 text-2xl text-blue-900"
      >
        ...もっと詳しく
      </Link>

      <section className="container flex flex-col min-h-screen content-between justify-between mt-10 mx-auto md:flex-row">
        <div className="bg-gray-100 flex container  flex-col">
          <div>
            <h1 className="font-fancy1 text-5xl font-medium text-center mb-5">
              Events
            </h1>
            {fourPosts.map((post: any) => (
              <div className="mx-4" key={post.id}>
                <SinglePost
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  start={post.start}
                  end={post.end}
                  location={post.location}
                  tags={post.tags}
                  slug={post.slug}
                  isPaginationPage={false}
                  // 追記
                  max={post.max}
                  fee={post.fee}
                />
              </div>
            ))}

            <div className="flex justify-center">
              <Link
                href="/posts/page/1"
                className="mb-6 lg:w-1/2 mx-auto px-5 block text-right my-5 text-2xl text-blue-900"
              >
                ...もっと見る
              </Link>
            </div>
            <Tag tags={allTags} />
            <br />
          </div>
        </div>

        <div className="bg-gray-100 flex container p-10 flex-col items-center">
          <div>
            <h1 className="font-fancy1 text-5xl text-center">Let's Join Us</h1>

            <br />
            <br />
            <Image src="/flyer.JPG" alt="" width={500} height={1000} />
          </div>
          {/* 会社概要が作成されたら追加する */}
          {/* <Link
            href="/contact"
            className="mb-6 lg:w-1/2 mx-auto px-5 block text-right mt-5 text-2xl text-blue-900"
          >
            ...イベント一覧
          </Link> */}
        </div>
      </section>
    </>
  );
};

export default Home;
