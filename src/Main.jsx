import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../src/pages/post";
import ListPage from "./pages/list";
import Landing from "./pages/Landing";
import Header from "./components/commons/Header";
import Message from "./pages/Message/Message";
import ColorSelector from "./pages/ColorSelector";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="/list" element={<ListPage />} />
        </Route>
        <Route path="/post">
          <Route index element={<ColorSelector />} />
          <Route path=":id" element={<Post />} />
          <Route path=":id/edit" element={<Post />} />
          <Route path=":id/message" element={<Message />} />
        </Route>
        <Route path="*" element={<div>잘못된 경로로 접근 시, 표시되는 에러 페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
