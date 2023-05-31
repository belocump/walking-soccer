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
    <section className="container h-full w-full mx-auto md:w-1/2">
      <div className="bg-yellow-50 p-5">
        <h1 className="w-full text-3xl font-medium text-center font-mono">
          予約内容
        </h1>
        <hr />

        <div className="mt-10 font-medium markdown">
          <h2 className="w-full text-3xl font-medium">イベント内容</h2>
          <p>イベント名：{post.metadata.title}</p>
          <p>
            　日時　　：{post.metadata.date}　{post.metadata.start}ー
            {post.metadata.end}
          </p>
          <p>　場所　　：{post.metadata.location}</p>
          <p>　参加費　：{post.metadata.fee}円</p>
        </div>

        <div className="mt-10 font-medium markdown">
          <h2 className="w-full text-3xl font-medium">お客様情報</h2>

          <div className="mt-10 font-medium markdown">
            <p>名前　　　　　：山田　太郎</p>
            <p>メールアドレス：barazyuuzi2000@gmail.com</p>
            <p>電話番号　　　：08088000808</p>
            <p>備考　　　　　：</p>
          </div>
          <form
          // onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <hr />
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                <Link href={`/books/complete/${post.metadata.slug}/`}>
                  規約に同意して参加する
                </Link>
              </button>
              <br />
              <button
                className="bg-blue-100 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                <Link href={`/books/info/${post.metadata.slug}/`}>
                  入力情報を変更する　
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Post;
