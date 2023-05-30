import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

// 追記
import { useEffect } from "react";
import axios from "axios";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CsrfToken } from "../types/types";
import { useAppSelector } from "../app/hooks";
import { selectCsrfState } from "../slices/appSlice";

const Home: NextPage = () => {
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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Plofile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center bg-gray-80">
        <h1 className="font-fancy1">はじめまして、Belocumpです</h1>
        <br />
        <p className="font-fancy1">
          小学校の教員として、１０年以上働いていました。
        </p>
        <p className="font-fancy2">
          プログラミングに興味があります。最近はPythonやフロントエンドの技術の勉強をしています。
        </p>
        <p className="font-fancy3">サッカーを心から愛しています。</p>
        <br />
        <p>どうぞ。よろしくお願いします。</p>
        <Image src="/kanban.png" alt="" width={400} height={200} />

        <Image src="/about-page.png" alt="" width={400} height={200} />
      </div>
    </div>
  );
};

export default Home;
