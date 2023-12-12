import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/list";
import Landing from "./pages/Landing";
import Header from "./components/commons/Header";


function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="post" element={<div>롤링 카드 생성 페이지</div>} />
        <Route
          path="post/:id"
          element={
            <div>카드 리스트에서 선택한 롤링페이퍼를 보여주는 페이지</div>
          }
        />
        <Route
          path="post/:id/edit"
          element={
            <div>카드 삭제, 페이지 삭제 등의 편집 기능을 수행하는 페이지</div>
          }
        />
        <Route
          path="post/:id/message"
          element={<div>수신인에게 전하고 싶은 메시지를 작성하는 페이지</div>}
        />

        <Route
          path="*"
          element={<div>잘못된 경로로 접근 시, 표시되는 에러 페이지</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
