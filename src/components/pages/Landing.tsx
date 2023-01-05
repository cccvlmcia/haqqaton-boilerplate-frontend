import {useQuery} from "react-query";
import axios from "axios";
import React, {Suspense, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";

import {Box, Button} from "@mui/material";

import {userQuery} from "@recoils/user/query";
import Loading from "@loading/Loading";
import Error from "@errors/Error";
import {getStorage, setStorage} from "utils/SecureStorage";
import {localeState} from "@recoils/locale/state";

type AppProps = {
  socialId: string;
  socialType: string;
  email: string;
  nickname: string;
};

export default function Landing() {
  const {isLoading, isError, data, error} = userQuery(useQuery);
  const [locale, setLocale] = useRecoilState(localeState);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error} />;
  }

  const checkLocale = () => {
    console.log(getStorage("locale"));
  };
  const handleLocale = (lang: string) => {
    setStorage("locale", lang);
    setLocale(lang);
  };

  // console.log("list >>", data);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        div: {display: "flex", gap: "20px"},
      }}>
      <Box component="h1">Main</Box>
      <Box>
        <Button variant="contained" onClick={() => handleLocale("ko")}>
          한국어
        </Button>
        <Button variant="contained" onClick={() => handleLocale("en")}>
          English
        </Button>
        <Button variant="outlined" onClick={() => checkLocale()}>
          언어 설정 확인
        </Button>
      </Box>
    </Box>
  );
}
