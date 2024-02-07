import {useParams} from "react-router-dom";
import {Box} from "@mui/system";
export default function Test() {
  const {id}: any = useParams();
  console.log("params >> ", id);
  return <Box>abcdefg :: {id}</Box>;
}
