import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../src/pages/post";
import PostEdit from "../src/pages/postEdit";
import ListPage from "./pages/list";
import Landing from "./pages/Landing";
import Header from "./components/commons/Header";
import CreateMessage from "./pages/createMessage";
import CreatePost from "./pages/createPost";
import NotFound from "./pages/not_found/NotFound";

function Main() {
  const [isThema, setIsThema] = useState(false);
  // false = whiteMode , true = blackMode
  function handleThema() {
    setIsThema((prev) => {
      return !prev;
    });
  }

  return (
    <BrowserRouter>
      <Header onThemaClick={handleThema} thema={isThema} />
      <Routes>
        <Route path="/">
          <Route index element={<Landing thema={isThema} />} />
          <Route path="/list" element={<ListPage />} />
        </Route>
        <Route path="/post">
          <Route index element={<CreatePost />} />
          <Route path=":id" element={<Post thema={isThema} />} />
          <Route path=":id/edit" element={<PostEdit thema={isThema} />} />
          <Route path=":id/message" element={<CreateMessage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
