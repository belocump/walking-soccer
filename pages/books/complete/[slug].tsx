import React from "react";
import { getAllPosts, getSinglePost } from "../../../libs/notionAPI";
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
      <div className="bg-yellow-50 p-5">
        <h1 className="w-full text-3xl font-medium text-center font-mono">
          予約完了
        </h1>
        <hr />

        <div className="mt-10 font-medium markdown">
          <h3 className="w-full text-3xl font-medium">
            予約が完了しました。
            <br />
            {post.metadata.title}を一緒に楽しみましょう!
            <br />
            <br />
            配信されたメールを確認してください。
            <br />
            お待ちしております。
          </h3>
        </div>

        {/* <Link href="/">
          <div className="pb-20 mt-10 text-sky-900 float-right">
            ←ホームに戻る
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default Post;
