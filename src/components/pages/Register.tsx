import {Box, Button} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";
// import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
export default function Register() {
  const natigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onEmailHandler = (event: any) => {
    const {
      currentTarget: {value},
    } = event;
    setEmail(value);
  };
  const onNameHandler = (event: any) => {
    const {
      currentTarget: {value},
    } = event;
    setName(value);
  };
  const onPasswordHandler = (event: any) => {
    const {
      currentTarget: {value},
    } = event;
    setPassword(value);
  };
  const onConfirmPasswordHandler = (event: any) => {
    const {
      currentTarget: {value},
    } = event;
    setConfirmPassword(value);
  };
  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    if (password != confirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    const {data} = await axios.post("/api/user/register", {
      email,
      password,
      name,
    });
    if (data?.success) {
      natigate("/login");
    } else {
      //notistack으로 변경 필요
      alert("Fail To Sign Up");
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
        <Box component={"label"}>Name</Box>
        <Box component={"input"} value={name} onChange={onNameHandler} />
        <Box component={"label"}>Password</Box>
        <Box component={"input"} type="password" value={password} onChange={onPasswordHandler} />
        <Box component={"label"}>Confrim Password</Box>
        <Box component={"input"} type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />
        <Button type="submit">Register</Button>
      </Box>
    </Box>
  );
}
