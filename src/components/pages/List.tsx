import {useQuery} from "react-query";

import {Box} from "@mui/material";

import {userQuery} from "@recoils/user/query";
import Loading from "@loading/Loading";
import Error from "@errors/Error";

export default function List() {
  const {isLoading, isError, data, error} = userQuery(useQuery);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error} />;
  }

  return (
    <Box>
      <Box component="h1">List</Box>
      <Box component="ul">{data.length > 0 && data.map((item: any, index: number) => <DataList key={index} data={item} />)}</Box>
    </Box>
  );
}

function DataList({data}: any) {
  return (
    <Box component="li">
      {data.id}번째 {data.name}
    </Box>
  );
}
