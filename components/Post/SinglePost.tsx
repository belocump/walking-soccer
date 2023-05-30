import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  isPaginationPage: boolean;
  // 追記
  start: string;
  end: string;
  location: string;
  // 追記
  max: number;
  fee: number;
};

const SinglePost = (props: Props) => {
  const {
    title,
    description,
    date,
    tags,
    slug,
    start,
    end,
    location,
    max,
    fee,
    isPaginationPage,
  } = props;
  return (
    <section className=" bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300">
      <div className="lg:flex items-center">
        <Link href={`/posts/${slug}`}>
          <h2 className="text-gray-100 mb-2">
            <span className="text-2xl font-medium ">{title}</span>
          </h2>
        </Link>

        <Link href={`/posts/${slug}`}>
          <div>
            <span className="ml-5 text-white">日付　：{date}</span>
            <br />
            <span className="ml-5 text-white">
              時間　：{start}から{end}
            </span>
            <br />
            <span className="ml-5 text-white">場所　：{location}</span>
            <br />
            <span className="ml-5 text-white">参加費：{fee}円</span>
          </div>
        </Link>
      </div>
      <br />

      <p className="text-gray-100">{description}</p>
      <br />

      {tags.map((tag: string, index: number) => (
        <Link href={`/posts/tag/${tag}/page/1`} key={index}>
          <span className="text-white bg-gray-500 rounded-xl px-2 font-medium mr-2">
            {tag}に関するイベント
          </span>
        </Link>
      ))}
    </section>
  );
};

export default SinglePost;
