import {Box} from "@mui/material";

export default function Error({error}: any) {
  return (
    <Box>
      <Box component={"h1"}>ERROR</Box>
      {error && (
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <Box component="span">Code : {error.code}</Box>
          <Box component="span">
            Error: {error.response.status} ({error.response.statusText})
          </Box>
          <Box component="span">Message: {error.response.data.message}</Box>
        </Box>
      )}
    </Box>
  );
}
