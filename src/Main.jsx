import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../src/pages/post";
import ListPage from "./pages/list";
import Landing from "./pages/Landing";
import Header from "./components/commons/Header";
import CreateMessage from "./pages/createMessage/CreateMessage";
import CreatePost from "./pages/createPost";
import NotFound from "./pages/not_found/NotFound";

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
          <Route index element={<CreatePost />} />
          <Route path=":id" element={<Post />} />
          <Route path=":id/edit" element={<Post />} />
          <Route path=":id/message" element={<CreateMessage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
