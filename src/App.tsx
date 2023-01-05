import {Route, Routes, Link} from "react-router-dom";
import {useIntl} from "react-intl";

import {Box} from "@mui/material";

import NotFound from "@errors/NotFound";
import Layout from "@layout/Layout";
import LandingPage from "@pages/Landing";
import About from "@pages/About";
import Editor from "@pages/Editor";
import Sample from "@pages/Sample";
import List from "@pages/List";
import Auth from "@hoc/auth";

export default function App() {
  const {formatMessage} = useIntl();
  return (
    <Box>
      <Box component="ul">
        <Box component="li">
          <Link to="/">{formatMessage({id: "menu.main"})}</Link>
        </Box>
        <Box component="li">
          <Link to="/about">{formatMessage({id: "menu.about"})}</Link>
        </Box>
        <Box component="li">
          <Link to="/sample">{formatMessage({id: "menu.sample"})}</Link>
        </Box>
        <Box component="li">
          <Link to="/write">{formatMessage({id: "menu.write"})}</Link>
        </Box>
        <Box component="li">
          <Link to="/list">{formatMessage({id: "menu.list"})}</Link>
        </Box>
        <Box component="li">
          <Link to="/contactus">{formatMessage({id: "menu.contact.us"})}</Link>
        </Box>
      </Box>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={Auth(LandingPage, null)}></Route>
          <Route path="/sample" element={Auth(Sample, null)}></Route>
          <Route path="/about" element={Auth(About, null)}></Route>
          <Route path="/write" element={Auth(Editor, null)}></Route>
          <Route path="/list" element={Auth(List, null)}></Route>
        </Route>
        <Route path="/*" element={Auth(NotFound, null)} />
      </Routes>
    </Box>
  );
}
