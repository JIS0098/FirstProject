import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import PostModal from "./PostModal";
import ShareComplete from "./ShareComplete";
import { testData, testDataEmoji, testDataAll } from "../../api/testFeatData";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Post() {
  const [showShare, toggleShare] = useToggle(false);
  const [showModal, toggleModal] = useToggle(false);
  const [emojiAdd, toggleEmoji] = useToggle(false);
  const [share, setShare] = useState(false);
  const [data, setData] = useState([]);
  const [dataEmoji, setDataEmoji] = useState([]);
  const [idSelectName, setIdSelectName] = useState([]);
  const [emojiUp, setEmojiUp] = useState(null);
  const [modalClick, setModalClick] = useState(0);
  const params = useParams();

  const pageId = params.id;

  useEffect(() => {
    testData(pageId).then((res) => {
      const result = res;
      setData(result.results);
    });
    testDataEmoji(pageId).then((res) => {
      const result = res;
      setDataEmoji(result.results);
    });
    testDataAll().then((res) => {
      const result = res;
      setIdSelectName(result.results);
    });
  }, [emojiUp]);

  const modalFind = data.find((item) => item.id === modalClick);
  const selectedPost = idSelectName.find((post) => post.id === Number(pageId));

  return (
    <PostBack>
      <PostHeader
        data={data}
        toggleShare={toggleShare}
        toggleEmoji={toggleEmoji}
        dataEmoji={dataEmoji}
        setEmojiUp={setEmojiUp}
        selectedPost={selectedPost}
        pageId={pageId}
      />
      <PostWrap
        data={data}
        dataEmoji={dataEmoji}
        showShare={showShare}
        emojiAdd={emojiAdd}
        setShare={setShare}
        toggleModal={toggleModal}
        setModalClick={setModalClick}
      />

      {/* modal */}
      <AnimatePresence>
        {showModal ? <PostModal toggleModal={toggleModal} modalFind={modalFind} /> : null}
      </AnimatePresence>

      {/* URL이 복사되었습니다. */}
      {share ? <ShareComplete /> : null}
    </PostBack>
  );
}

const PostBack = styled.div`
  background-color: #ffe2ad;
  width: 100vw;
  min-height: 100vh;
`;

export default Post;
