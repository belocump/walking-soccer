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
  // 目次ここまで

  return (
    <section className="container h-auto lg:px-2 px-5 lg:w-3/5 mx-auto mt-20">
      {/* 目次 */}
      <div className="p-3 m-10 bg-gray-100 border border-black border-dashed">
        <p className="text-center text-3xl">目次</p>
        <ol className="p-2 list-decimal list-inside">
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

      <h2 className="w-full text-3xl font-medium">{post.metadata.title}</h2>
      <div className="border-b-2 w-1/3 mt-1 border-sky-900"></div>
      <span className="text-gray-500">Posted date at {post.metadata.date}</span>
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

        <h2 className="text-white bg-sky-50 rounded-xl font-medium mt-2 px-2 inline-block mr-2">
          <Link href={`/books/${post.metadata.slug}/`}>ご予約はこちらから</Link>
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
