import React from "react";
import { getAllPosts, getSinglePost } from "../../../libs/notionAPI";
import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SlLogout } from "react-icons/sl";
import { useProcessAuth } from "../../../hooks/useProcessAuth";

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

const Post = ({ post }: any) => {
  const { logout } = useProcessAuth();

  return (
    <section className="container h-full w-full mx-auto md:w-1/2">
      <SlLogout
        onClick={logout}
        className="h-7 w-7 mt-1 mb-5 text-blue-500 cursor-pointer"
      />

      <div className="bg-yellow-50 p-5">
        <h2 className="w-full text-3xl font-medium text-center font-mono">
          予約内容
        </h2>
        <hr />

        <div className="mt-10 font-medium markdown">
          <h2 className="w-full text-3xl font-medium">イベント詳細</h2>
          <p>イベント名：ウォーキングサッカー{post.metadata.title}</p>
          <p>　日時　　：2023年5月29日　19時ー21時</p>
          <p>　場所　　：いわき市フットサル場</p>
          <p>　参加費　：1000円</p>
        </div>

        <div className="mt-10 font-medium markdown">
          <h2 className="w-full text-3xl font-medium">お客様情報</h2>

          <form
          // onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <div className="flex flex-col items-center">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                お名前
              </label>
              <input
                className="appearance-none block w-5/6 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mx-2 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="name"
                placeholder="（例)　山田　太郎"
                required
                // ref={nameRef}
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="tel"
              >
                電話番号
              </label>
              <input
                className="appearance-none block w-5/6 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mx-2 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="tel"
                placeholder="（例)　08012120011　*ハイフンなし半角"
                required
                // ref={emailRef}
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                備考
              </label>
              <textarea
                className="block mx-2 p-2.5 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                id="message"
                placeholder="ご予約について特記事項があればお書きください。"
                required
                // ref={messageRef}
                rows={8}
              />
            </div>
            <br />

            <hr />
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                <Link href={`/books/confirm/${post.metadata.slug}/`}>
                  <span className="text-white">ご予約内容の確認</span>
                </Link>
              </button>
            </div>
          </form>

          {/* <Link href="/">
            <div className="pb-20 mt-10 text-sky-900 float-right">
              ←ホームに戻る
            </div>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Post;
