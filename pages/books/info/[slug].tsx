import React, { useState, useEffect } from "react";
import { getAllPosts, getSinglePost } from "../../../libs/notionAPI";
// import Link from "next/link";
import { useRouter } from "next/router";

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
const Post = ({ post, liff, liffError }: any) => {
  const [displayName, setDisplayName] = useState("");
  const [userId, setUserId] = useState("");
  // const [token, setToken] = useState("Token////");

  // からのJSONデータ
  const [formData, setFormData] = useState({});
  const router = useRouter();

  // if (liff) {
  //   // 開発用。（重要）実際の運用の際はコメント。モックのためにログイン。liffアプリはログインした状態になっているため。
  //   liff.login();
  //   // { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }

  //   liff.getProfile().then((profile: any) => {
  //     // プロフィール名
  //     setDisplayName(profile.displayName);
  //     // lineの返信用に
  //     setUserId(profile.userId);

  //     // const idToken = liff.getIDToken();
  //     // setToken(idToken);
  //   });
  // }

  useEffect(() => {
    if (liff) {
      // 開発用。（重要）実際の運用の際はコメント。モックのためにログイン。liffアプリはログインした状態になっているため。
      // liff.login();
      // { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }

      liff.getProfile().then((profile: any) => {
        // プロフィール名
        setDisplayName(profile.displayName);
        // lineの返信用に
        setUserId(profile.userId);

        // const idToken = liff.getIDToken();
        // setToken(idToken);
      });
    }
  }, [liff]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: `/books/confirm/${post.metadata.slug}/`,
      query: formData,
    });
  };

  return (
    <section className="container h-full w-full mx-auto md:w-1/2">
      <div className="bg-yellow-50 p-5">
        <h2 className="w-full text-3xl font-medium text-center font-mono">
          予約内容
        </h2>
        <h1 className="text-center text-3xl">{displayName}さん、こんにちは</h1>
        <hr />

        <div className="mt-10 font-medium markdown">
          <h2 className="w-full text-3xl font-medium">イベント詳細</h2>
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

          <form
            // onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
            onSubmit={handleSubmit}
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
                name="name"
                id="name"
                onChange={handleChange}
                placeholder="（例)　山田　太郎"
                value={displayName}
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
                name="tel"
                id="tel"
                placeholder="（例)　08012120011　*ハイフンなし半角"
                onChange={handleChange}
                // value={userId.slice(0, 5)}
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
                name="message"
                id="message"
                placeholder="ご予約について特記事項があればお書きください。"
                onChange={handleChange}
                // required
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
                {/* <Link href={`/books/confirm/${post.metadata.slug}/`}> */}
                <span className="text-white">ご予約内容の確認</span>
                {/* </Link> */}
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
