import React from "react";
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
const Post = ({ post }: any) => {
  const router = useRouter();
  const { name, tel, message } = router.query;

  return (
    <section className="container h-auto lg:px-2 px-5 lg:w-3/5 mx-auto mt-20">
      <div className="bg-yellow-50 p-5">
        <h1 className="w-full text-3xl font-medium text-center font-mono">
          予約完了[これはダミーです。]
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
          <p>名前　　　　　：{name}</p>
          {/* <p>メールアドレス：barazyuuzi2000@gmail.com</p> */}
          <p>電話番号　　　：{tel}</p>
          <p>備考　　　　　：{message}</p>
        </div>

        <div className="mt-10 font-medium markdown">
          <h3 className="w-full text-3xl font-medium">
            予約が完了しました。
            {post.metadata.title}を一緒に楽しみましょう!
            <br />
            配信されたメールを確認してください。
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
