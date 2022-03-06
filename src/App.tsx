import React, { memo } from "react";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Redirect from "./pages/Redirect/Redirect";
import Story from "./pages/Story/Story";
import Admin from "./pages/Admin/Admin";

interface PT {}

const App: React.FC<PT> = () => {
  return (
    <Routes>
      <Route path="/apple-store" element={<Redirect />} />
      <Route path="/Apple's-diary" element={<Story />} />
      <Route path="/this-is-your-site-Apple" element={<Admin />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default memo(App);
