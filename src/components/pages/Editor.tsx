import {useQuery} from "react-query";
import axios from "axios";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {Box, Button, Input, TextField} from "@mui/material";

import {userQuery} from "@recoils/user/query";
import Loading from "@loading/Loading";
import Error from "@errors/Error";

export default function Editor() {
  const {bbsid, articleid} = useParams();
  const {isLoading, isError, data, error} = userQuery(useQuery);
  const {register, handleSubmit} = useForm();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error} />;
  }

  // 글 작성 버튼
  const dataPost = async (params: any) => {
    console.log("params >> ", params);
    const {data} = await axios.post("api/article/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        div: {width: "100%", display: "flex", gap: "20px"},
        "div > span": {minWidth: "80px"},
        "div + div": {width: "80%"},
      }}
      component="form"
      onSubmit={handleSubmit(dataPost)}>
      <Box component="h1">Editor</Box>
      <Box>
        <Box component="span">제목</Box>
        <Box>
          <Input placeholder="input" fullWidth={true} {...register("title")} />
        </Box>
      </Box>
      <Box>
        <Box component="span">내용</Box>
        <Box>
          <TextField placeholder="textfield" fullWidth={true} multiline={true} {...register("contents")} />
        </Box>
      </Box>
      <Box>
        <Box component="span">&nbsp;</Box>
        <Box>
          <Button variant="contained" type="submit">
            작성
          </Button>
          <Button variant="outlined" type="reset">
            취소
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
