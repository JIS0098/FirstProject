import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import PostModal from "./PostModal";
import ShareComplete from "./ShareComplete";
import { getMessageByPaperId, getEmojiByPaperId, getRollingPaper } from "api";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Post() {
  const [showShare, toggleShare, setShowShare] = useToggle(false);
  const [showModal, toggleModal, setShowModal] = useToggle(false);
  const [emojiAdd, toggleEmoji, setEmojiAdd] = useToggle(false);
  const [emojiPick, toggleEmojiPick, setEmojiPick] = useToggle(false);
  const [share, setShare] = useState(false);
  const [data, setData] = useState([]);
  const [dataEmoji, setDataEmoji] = useState([]);
  const [idSelectName, setIdSelectName] = useState([]);
  const [emojiUp, setEmojiUp] = useState(null);
  const [modalClick, setModalClick] = useState(0);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const pageId = useMemo(() => params.id, [params.id]);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pageRef.current && !pageRef.current.contains(event.target)) {
        setShowShare(false);
        setEmojiPick(false);
        setEmojiAdd(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [setEmojiAdd, setEmojiPick, setShowShare]);

  const toggleFalse = () => {
    if (showShare) {
      setShowShare(false);
    }
    if (emojiPick) {
      setEmojiPick(false);
    }
    if (emojiAdd) {
      setEmojiAdd(false);
    }
  };
  const modalFalse = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const messagesResult = await getMessageByPaperId(pageId);
        const rollingPaperResult = await getRollingPaper(pageId);

        setData(messagesResult.results);
        setIdSelectName(rollingPaperResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId]);

  useEffect(() => {
    const fetchEmoji = async () => {
      try {
        const emojiResult = await getEmojiByPaperId(pageId);
        setDataEmoji(emojiResult.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchEmoji();
  }, [emojiUp, pageId]);

  const modalFind = data.find((item) => item.id === modalClick);
  const selectedPost = idSelectName;
  const backgroundColor = selectedPost?.backgroundColor;
  const backgroundUrl = selectedPost?.backgroundImageURL;

  return !loading ? (
    <PostBack ref={pageRef} backgroundColor={backgroundColor} backgroundUrl={backgroundUrl}>
      <PostHeader
        data={data}
        toggleShare={toggleShare}
        toggleEmoji={toggleEmoji}
        dataEmoji={dataEmoji}
        setEmojiUp={setEmojiUp}
        selectedPost={selectedPost}
        pageId={pageId}
        emojiAdd={emojiAdd}
        showShare={showShare}
        setShare={setShare}
        toggleFalse={toggleFalse}
        emojiPick={emojiPick}
        toggleEmojiPick={toggleEmojiPick}
      />
      <PostWrapBack onClick={() => toggleFalse()}>
        <PostWrap data={data} toggleModal={toggleModal} setModalClick={setModalClick} />
      </PostWrapBack>

      {/* modal */}
      <AnimatePresence>
        {showModal ? <PostModal modalFalse={modalFalse} toggleModal={toggleModal} modalFind={modalFind} /> : null}
      </AnimatePresence>

      {/* URL이 복사되었습니다. */}
      {share ? <ShareComplete /> : null}
    </PostBack>
  ) : (
    <div>..loading</div>
  );
}

const PostBack = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundUrl" && prop !== "backgroundColor",
})`
  background: ${({ backgroundUrl, backgroundColor }) => (backgroundUrl ? `url(${backgroundUrl})` : backgroundColor)};

  background-size: cover;
  width: 100vw;
  min-height: 100vh;
`;

const PostWrapBack = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export default Post;
