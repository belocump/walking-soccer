import React from "react";
import { getAllPosts, getSinglePost } from "../../libs/notionAPI";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
// 目次
const Post = ({ post }: any) => {
  return (
    <section className="container h-auto lg:px-2 px-5 lg:w-3/5 mx-auto mt-20">
      <h2 className="w-full text-3xl font-medium">予約詳細</h2>
      <div className="border-b-2 w-1/3 mt-1 border-sky-900"></div>
      <p>
        {post.metadata.title}Posted date at {post.metadata.date}
      </p>
      <br />

      <div className="mt-10 font-medium markdown">
        <h2 className="text-white bg-sky-50 rounded-xl font-medium mt-2 px-2 inline-block mr-2">
          <Link href={`/event/${post.metadata.slug}/`}>予約する</Link>
        </h2>

        <br />
        <Link href="/">
          <div className="pb-20 mt-10 text-sky-900 float-right">
            ←ホームに戻る
          </div>
        </Link>
        <br />
      </div>
    </section>
  );
};

export default Post;
