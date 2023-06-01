import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ウォーキングサッカーについて</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container flex flex-col min-h-screen content-between justify-between mt-10 mx-auto md:flex-row">
        <div className="bg-gray-100 flex container p-10 flex-col items-center py-2">
          <div>
            <h1 className="font-fancy2 text-3xl font-medium text-center my-5">
              ウォーキングサッカー
            </h1>

            <div className="flex flex-col items-center bg-gray-200 p-5 mb-5">
              <p className="m-5">
                ウォーキングサッカーとは歩いて行うサッカーのことで、「走らない」「ぶつからない」ので誰でも安心して取り組めるスポーツです。55歳以上の高齢者の健康のためのサッカーが原点と言われています。
              </p>
              <p className="m-5">
                サッカーやフットサルだと、ある程度のレベルがないと女性や年齢差のある人が若い人の中に入って楽しむことが難しかったりします。しかしウォーキングサッカーなら、誰もが主役になりみんなで一緒になってサッカーを楽しめるのです！
              </p>
              <p className="m-5">
                そんな「魔法のスポーツ」が、このウォーキングサッカーです。
              </p>
            </div>

            <br />
            <Image src="/about2.png" alt="" width={500} height={1000} />

            <br />
          </div>
        </div>

        <div className="bg-gray-100 flex container p-10 flex-col items-center py-2">
          <h1 className="font-fancy2 text-3xl font-medium text-center my-5">
            ルール
          </h1>
          <div className=" bg-gray-200 p-5 mb-5">
            <h2 className="text-center">通常ルール</h2>
            <br />
            <ol>
              <li>1. コート内では、全員歩いてプレー。（早歩きはＯＫ。）</li>
              <li>2. 相手にぶつからない、さわらない</li>
              <li>3. アウトボールは、キックイン</li>
              <li>4. 1.8ｍ以上の高さに蹴り上げた場合は反則</li>
              <li>5. コートサイズ、ゴールサイズはフットサルコートと同じ。</li>
              <li>6. 試合使用球はフットサルボール</li>
              <li>7. スライディング禁止</li>
            </ol>
            <br />
            <h2 className="text-center">特別ルール</h2>
            <br />
            <ol>
              <li>1. コート内では、全員歩いてプレー。（早歩きはＯＫ。）</li>
              <li>2. 相手にぶつからない、さわらない</li>
              <li>3. アウトボールは、キックイン</li>
            </ol>
          </div>

          <Image src="/about1.png" alt="" width={500} height={1000} />

          <div className=" bg-purple-300 rounded-3xl p-5 mt-10">
            <h1 className="font-fancy2 text-3xl font-medium mb-10">
              ウォーキングサッカーを一緒に、始めてみませんか？
            </h1>
            <hr />
            <hr />
            {/* <Logo /> */}
            <p>
              わたしたち、合同会社・BELOCUMPは、ウォーキングサッカーをきっかけに誰もが垣根を越えて、気軽にスポーツを続けることが、スポーツ文化の発展・健康増進や様々な社会課題の解決につながるような取り組みが広がっていくことを願います。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
