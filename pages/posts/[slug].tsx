import React from "react";
import { getAllPosts, getSinglePost } from "../../libs/notionAPI";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
// 追記
import { useEffect } from "react";
import axios from "axios";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CsrfToken } from "../../types/types";
import { useAppSelector } from "../../app/hooks";
import { selectCsrfState } from "../../slices/appSlice";

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
  const H2 = ({ node, ...props }: any) => {
    return (
      <div>
        <h2 id={node.position?.start.line.toString()}>{props.children}</h2>
      </div>
    );
  };

  const ankerLink = ({ node, ...props }: any) => {
    return (
      <a
        className="list-item hover:bg-gray-200"
        href={"#" + node.position?.start.line.toString()}
      >
        {props.children}
      </a>
    );
  };
  // CSRFトークン
  const csrf = useAppSelector(selectCsrfState);

  useEffect(() => {
    const getCsrfToken = async () => {
      const res = await axios.get<CsrfToken>(
        `http://127.0.0.1:8000/api/csrftoken`
        // `${process.env.NEXT_PUBLIC_API_URL}/csrftoken`
      );
      axios.defaults.headers.common["X-CSRF-Token"] = res.data.csrf_token;
      console.log(res.data.csrf_token);
      console.log(process.env.NEXT_PUBLIC_API_URL);
    };
    getCsrfToken();
  }, [csrf]);

  return (
    <section className="container h-auto lg:px-2 lg:w-full mx-auto mt-10">
      {/* 目次 */}
      <div className="p-10 m-3 bg-gray-100 border border-black border-dashed">
        <p className="text-red text-center text-4xl font-fancy3">目次</p>
        <ol className="p-2 list-decimal list-inside text-2xl font-fancy3">
          <ReactMarkdown
            allowedElements={["h2"]}
            components={{
              h2: ankerLink,
            }}
          >
            {post.markdown}
          </ReactMarkdown>
        </ol>
      </div>
      {/* 目次ここまで */}

      {/* 詳細 */}
      <div className="p-10 m-3 bg-gray-100 border border-black border-dashed">
        <h2 className="text-3xl font-medium">{post.metadata.title}</h2>

        <span className="text-gray-500">
          Posted date at {post.metadata.date}
        </span>
        <br />
        {post.metadata.tags.map((tag: string, index: number) => (
          <p
            className="text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block mr-2"
            key={index}
          >
            <Link href={`/posts/tag/${tag}/page/1`}>{tag}</Link>
          </p>
        ))}

        <div className="mt-10 font-medium markdown">
          <ReactMarkdown
            components={{
              h2: H2,
              code({ node, inline, className, children }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code>{children}</code>
                );
              },
            }}
          >
            {post.markdown}
          </ReactMarkdown>
        </div>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            <Link href={`/books/info/${post.metadata.slug}/`}>
              ご予約はこちらから
            </Link>
          </button>
        </div>

        <Link href="/">
          <div className="pb-20 mt-10 text-sky-900 float-right text-2xl m-4">
            ←ホームに戻る
          </div>
        </Link>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Post;
