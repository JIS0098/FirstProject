import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useToggle from "hooks/useToggle";
import PostHeader from "components/domains/post/PostHeader";
import PostWrap from "components/domains/post/PostWrap";
import PostModal from "components/domains/post/PostModal";
import ShareComplete from "components/domains/post/ShareComplete";
import { getMessageByPaperId, getEmojiByPaperId, getRollingPaper } from "api";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useImageLoader from "hooks/useImageLoader";

function Post({ thema }) {
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

  //이미지가 서버에 없는 경우 null.
  const imageLoaded = useImageLoader(backgroundUrl);
  const loadedBackgroundImg = imageLoaded ? backgroundUrl : null;

  return (
    <PostBack ref={pageRef} backgroundColor={backgroundColor} backgroundUrl={loadedBackgroundImg} thema={thema}>
      <PostHeader
        thema={thema}
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
        params={params}
      />
      <PostWrapBack onClick={() => toggleFalse()}>
        <PostWrap thema={thema} data={data} toggleModal={toggleModal} setModalClick={setModalClick} loading={loading} />
      </PostWrapBack>

      {/* modal */}
      <AnimatePresence>
        {showModal ? <PostModal modalFalse={modalFalse} toggleModal={toggleModal} modalFind={modalFind} /> : null}
      </AnimatePresence>

      {/* URL이 복사되었습니다. */}
      {share ? <ShareComplete /> : null}
    </PostBack>
  );
}

const PostBack = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundUrl" && prop !== "backgroundColor",
})`
  background: ${({ backgroundUrl, backgroundColor, theme }) =>
    backgroundUrl ? `url(${backgroundUrl})` : theme.backgroundColor[`${backgroundColor}`]};

  background-size: cover;
  width: 100%;
  height: 100%;
  background-position-x: center;
`;

const PostWrapBack = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  /* backdrop-filter: blur(5px); */
  /* filter: blur(5px); */
`;

export default Post;
