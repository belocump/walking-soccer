import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useAppDispatch } from "../app/hooks";
import { resetEditedTask, toggleCsrfState } from "../slices/appSlice";
import { User } from "../types/types";

export const useMutateAuth = () => {
  // const history = useHistory();
  const history = useRouter();
  const dispatch = useAppDispatch();

  const loginMutation = useMutation(
    async (user: User) =>
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, user, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        history.push("/about");
      },
      onError: (err: any) => {
        alert(`${err.response.data.detail}\n${err.message}`);
        if (err.response.data.detail === "The CSRF token has expired.") {
          dispatch(toggleCsrfState());
        }
      },
    }
  );
  const registerMutation = useMutation(
    async (user: User) =>
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, user),
    {
      onError: (err: any) => {
        alert(`${err.response.data.detail}\n${err.message}`);
        if (err.response.data.detail === "The CSRF token has expired.") {
          dispatch(toggleCsrfState());
        }
      },
    }
  );
  const logoutMutation = useMutation(
    async () =>
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: () => {
        history.push("/");
      },
      onError: (err: any) => {
        alert(`${err.response.data.detail}\n${err.message}`);
        if (err.response.data.detail === "The CSRF token has expired.") {
          dispatch(toggleCsrfState());
          dispatch(resetEditedTask());
          history.push("/about");
        }
      },
    }
  );
  return { loginMutation, registerMutation, logoutMutation };
};
