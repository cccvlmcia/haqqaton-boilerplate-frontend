import {selector} from "recoil";
import {sampleState} from "./state";
import Cookies from "js-cookie";
import axios from "axios";

//react-query
export const sampleAxios = () => {
  return axiosProcess((headers: any) => axios.get(`https://dummyjson.com/products/`, {headers}));
};
// selector
export const sampleSelector = selector({
  key: "sampleSelector",
  get: async () => {
    return axiosProcess(async (headers: any) => {
      const {data} = await axios.get(`https://dummyjson.com/products/`, {headers});
      return data;
    });
  },
  set: ({set}, newValue) => {
    set(sampleState, newValue);
  },
});

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
