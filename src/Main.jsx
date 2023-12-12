import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../src/pages/post";
import ListPage from "./pages/list";
import Landing from "./pages/Landing";
import Header from "./components/commons/Header";
import Message from "./pages/Message/Message";
import ColorSelector from "./pages/ColorSelector";
import NotPound from "./pages/NotPound";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="post" element={<ColorSelector />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="post/:id/edit" element={<div>카드 삭제, 페이지 삭제 등의 편집 기능을 수행하는 페이지</div>} />
        <Route path="post/:id/message" element={<Message />} />
        <Route path="*" element={<NotPound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
