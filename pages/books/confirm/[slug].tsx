import React, { useState, useEffect } from "react";
import { getAllPosts, getSinglePost } from "../../../libs/notionAPI";
import Link from "next/link";
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

  // { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }
  const router = useRouter();
  const { name, tel, message } = router.query;

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

  // useEffect(() => {
  //   if (profile) {
  //     profile
  //       .then((result: any) => {
  //         setDisplayName(result.displayName);
  //         setUserId(result.userId);
  //       })
  //       .catch((error: any) => {
  //         console.log("Error retrieving profile:", error);
  //       });
  //   }
  // }, [profile]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: `/books/complete/${post.metadata.slug}/`,
      query: router.query,
    });
  };

  return (
    <section className="container h-full w-full mx-auto md:w-1/2">
      <div className="bg-yellow-50 p-5">
        <h1 className="w-full text-3xl font-medium text-center font-mono">
          予約内容
        </h1>
        <h1 className="text-center text-3xl">{displayName}さん、こんにちは</h1>
        <hr />
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
            <p>名前　　　　　：{name}</p>
            {/* <p>メールアドレス：barazyuuzi2000@gmail.com</p> */}
            <p>電話番号　　　：{tel}</p>
            <p>備考　　　　　：{message}</p>
          </div>
          <form
            // onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
            onSubmit={handleSubmit}
          >
            <hr />
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded"
                // type="submit"
              >
                {/* <Link href={`/books/complete/${post.metadata.slug}/`}> */}
                規約に同意のうえ参加する
                {/* </Link> */}
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
