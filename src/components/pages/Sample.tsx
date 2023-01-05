import {useQuery} from "react-query";

import {Box} from "@mui/material";

import {sampleQuery} from "@recoils/sample/query";
import Loading from "@loading/Loading";
import Error from "@errors/Error";

export default function Sample() {
  const {isLoading, isError, data, error} = sampleQuery(useQuery);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error} />;
  }
  // console.log("data > ", data);
  const {products} = data;
  return (
    <Box sx={{li: {listStyle: "none", display: "flex"}}}>
      <Box component="h1">Axios Sample</Box>
      <Box component="ul">{products.length > 0 && products.map((item: any, index: number) => <DataList key={index} data={item} />)}</Box>
    </Box>
  );
}

function DataList({data}: any) {
  return (
    <Box component="li">
      <Box>
        <Box component="img" src={data.thumbnail} />
      </Box>
      <Box>
        {data.id}번째 {data.title} : {data.description}
      </Box>
    </Box>
  );
}
