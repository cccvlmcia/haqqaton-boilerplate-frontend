import {selector} from "recoil";
import {userState} from "./state";
import Cookies from "js-cookie";
import axios from "axios";

//react-query
export const userAxios = () => {
  return axiosProcess((headers: any) => axios.get(`/api/v1/client`, {headers}));
};

export const axiosProcess = (caller: any) => {
  try {
    const idToken = Cookies.get("x_auth");
    const headers = idToken && {authorization: `Bear ${idToken}`};
    return caller(headers);
  } catch (err: any) {
    if (err.response) {
      const {data} = err.response;
      console.error(data);
    } else {
      console.error(err);
    }
  }
};
