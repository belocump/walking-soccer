import { VFC } from "react";
import { useProcessAuth } from "../hooks/useProcessAuth";
import { NextPage } from "next";
import { BsCheckSquare } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
// 追記
import { useEffect } from "react";
import axios from "axios";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CsrfToken } from "../types/types";
import { useAppSelector } from "../app/hooks";
import { selectCsrfState } from "../slices/appSlice";

const Auth: NextPage = () => {
  const csrf = useAppSelector(selectCsrfState);
  useEffect(() => {
    const getCsrfToken = async () => {
      const res = await axios.get<CsrfToken>(
        // `http://127.0.0.1:8000/api/csrftoken`
        `${process.env.NEXT_PUBLIC_API_URL}/csrftoken`
      );
      axios.defaults.headers.common["X-CSRF-Token"] = res.data.csrf_token;
      console.log(res.data.csrf_token);
      console.log(process.env.NEXT_PUBLIC_API_URL);
    };
    getCsrfToken();
  }, [csrf]);

  const {
    pw,
    setPw,
    email,
    setEmail,
    isLogin,
    setIsLogin,
    registerMutation,
    loginMutation,
    processAuth,
  } = useProcessAuth();
  if (registerMutation.isLoading || loginMutation.isLoading) {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen ">
        <h1 className="text-xl text-gray-600 font-mono">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <div className="flex items-center">
        <BsCheckSquare className="h-8 w-8 mr-2 text-blue-500" />
        <span className="text-center text-3xl font-extrabold">
          ログインページ
        </span>
      </div>
      <h2 className="my-6">{isLogin ? "Login" : "Create a new account"}</h2>
      <form onSubmit={processAuth}>
        <div>
          <input
            className="mb-3 px-3 text-sm py-2 border border-gray-300"
            name="email"
            type="email"
            autoFocus
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className="mb-3 px-3 text-sm py-2 border border-gray-300"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
        </div>
        <div className="flex justify-center my-2">
          <button
            className="disabled:opacity-40 py-2 px-4 rounded text-white bg-indigo-600"
            disabled={!email || !pw}
            type="submit"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>
      <FiRefreshCw
        onClick={() => setIsLogin(!isLogin)}
        className="h-8 w-8 my-2 text-blue-500 cursor-pointer"
      />
    </div>
  );
};

export default Auth;
