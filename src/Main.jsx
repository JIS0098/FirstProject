import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocationProvider } from "contexts/LocationContext";
import { SnowTheme } from "styles/snowTheme";
import CreateMessage from "pages/createMessage";

const Landing = React.lazy(() => import("./pages/landing/index"));
const ListPage = React.lazy(() => import("./pages/list/index"));
const CreatePost = React.lazy(() => import("./pages/createPost/index"));
const Post = React.lazy(() => import("./pages/post/index"));
const PostEdit = React.lazy(() => import("./pages/postEdit/index"));
const Header = React.lazy(() => import("./components/commons/Header"));
const NotFound = React.lazy(() => import("./pages/not_found/NotFound"));

function Main({ onToggleTheme, isDark }) {
  return (
    <BrowserRouter>
      <LocationProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Header onThemaClick={onToggleTheme} />
          <SnowTheme isDark={isDark} />
          <Routes>
            <Route path="/">
              <Route index element={<Landing />} exact />
              <Route path="/list" element={<ListPage />} exact />
            </Route>
            <Route path="/post">
              <Route index element={<CreatePost />} exact />
              <Route path=":id" element={<Post />} exact />
              <Route path=":id/edit" element={<PostEdit />} exact />
              <Route path=":id/message" element={<CreateMessage />} exact />
            </Route>
            <Route path="*" element={<NotFound />} exact />
          </Routes>
        </Suspense>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default Main;
