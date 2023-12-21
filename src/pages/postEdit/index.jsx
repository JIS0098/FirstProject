import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import ShareComplete from "./ShareComplete";
import { getMessageByPaperId, getEmojiByPaperId, getRollingPaper } from "api";
import { useParams } from "react-router-dom";

function Post({ thema }) {
  const [showShare, toggleShare, setShowShare] = useToggle(false);
  const [emojiAdd, toggleEmoji, setEmojiAdd] = useToggle(false);
  const [emojiPick, toggleEmojiPick, setEmojiPick] = useToggle(false);
  const [share, setShare] = useState(false);
  const [data, setData] = useState([]);
  const [dataEmoji, setDataEmoji] = useState([]);
  const [idSelectName, setIdSelectName] = useState([]);
  const [emojiUp, setEmojiUp] = useState(null);
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

  const selectedPost = idSelectName;
  const backgroundColor = selectedPost?.backgroundColor;
  const backgroundURL = selectedPost?.backgroundImageURL;

  return (
    <PostBack ref={pageRef} backgroundColor={backgroundColor} backgroundURL={backgroundURL}>
      <PostHeader
        thema={thema}
        data={data}
        toggleShare={toggleShare}
        toggleEmoji={toggleEmoji}
        dataEmoji={dataEmoji}
        setEmojiUp={setEmojiUp}
        selectedPost={selectedPost}
        emojiAdd={emojiAdd}
        showShare={showShare}
        setShare={setShare}
        pageId={pageId}
        toggleFalse={toggleFalse}
        emojiPick={emojiPick}
        toggleEmojiPick={toggleEmojiPick}
      />
      <PostWrapBack onClick={() => toggleFalse()}>
        <PostWrap data={data} pageId={pageId} loading={loading} thema={thema} />
      </PostWrapBack>
      {/* URL이 복사되었습니다. */}
      {share ? <ShareComplete /> : null}
    </PostBack>
  );
}

const PostBack = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundURL" && prop !== "backgroundColor",
})`
  background: ${(props) => (props.backgroundURL ? `url(${props.backgroundURL})` : props.backgroundColor)};
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
`;

const PostWrapBack = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  /* backdrop-filter: blur(5px); */
  /* filter: blur(5px); */
`;

export default Post;
