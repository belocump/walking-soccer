// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!confirm("メールを送信します。よろしいですか?")) {
      return;
    }

    e.preventDefault();

    // console.log("送信中・・・");

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("送信に成功しました");
    });
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container m-3 h-full w-full mx-auto md:w-1/2">
        <div className="bg-yellow-50 mx-3">
          <h2 className="text-3xl font-fancy1 mx-2 mb-10 text-center">
            Contact to Belocump
          </h2>

          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                お名前
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mx-2 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="name"
                placeholder="（例)　山田　太郎"
                required
                ref={nameRef}
              />
            </div>

            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                メールアドレス
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mx-2 leading-tight focus:outline-none focus:bg-white"
                type="email"
                id="email"
                placeholder="（例)　aaa@aa.com"
                required
                ref={emailRef}
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                メッセージ
              </label>
              <textarea
                className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="message"
                placeholder="メッセージをここに書いてください"
                required
                ref={messageRef}
              />
            </div>
            <hr />
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                メール送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
