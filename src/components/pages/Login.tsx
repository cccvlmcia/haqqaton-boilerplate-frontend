import {Box, Button} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";
import {useRecoilState} from "recoil";
import {userState} from "../../recoils/user/state";
import {useNavigate} from "react-router-dom";
export default function Login() {
  const natigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event: any) => {
    const {
      currentTarget: {value},
    } = event;
    setEmail(value);
  };
  const onPasswordHandler = (event: any) => {
    const {
      currentTarget: {value},
    } = event;
    setPassword(value);
  };
  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const {data} = await axios.post("/api/user/login", {email, password});
    if (data?.loginSuccess) {
      // setUser({ loginSuccess: data?.loginSuccess, userid: data?.userId });
      setUser(data?.userId);
      natigate("/");
    } else {
      //notistack으로 변경 필요
      alert(data.message);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "100px",
      }}>
      <Box component={"form"} sx={{display: "flex", flexDirection: "column"}} onSubmit={onSubmitHandler}>
        <Box component={"label"}>Email</Box>
        <Box component={"input"} type="email" value={email} onChange={onEmailHandler} />
        <Box component={"label"}>Password</Box>
        <Box component={"input"} type="password" value={password} onChange={onPasswordHandler} />
        <Button type="submit">Login</Button>
      </Box>
    </Box>
  );
}
