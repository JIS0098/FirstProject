import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import PostModal from "./PostModal";
import ShareComplete from "./ShareComplete";
import { getMessageByPaperId, getEmojiByPaperId, getRollingPaper } from "api";
import { useParams } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const pageId = params.id;

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
  }, [emojiUp]);

  const modalFind = data.find((item) => item.id === modalClick);
  const selectedPost = idSelectName;
  const backgroundColor = selectedPost?.backgroundColor;
  const backgroundURL = selectedPost?.backgroundImageURL;

  return !loading ? (
    <PostBack backgroundColor={backgroundColor} backgroundURL={backgroundURL}>
      <PostHeader
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
      />
      <PostWrap data={data} toggleModal={toggleModal} setModalClick={setModalClick} pageId={pageId} />

      {/* modal */}
      {showModal ? <PostModal toggleModal={toggleModal} modalFind={modalFind} /> : null}

      {/* URL이 복사되었습니다. */}
      {share ? <ShareComplete /> : null}
    </PostBack>
  ) : (
    <div>..loading</div>
  );
}

const PostBack = styled.div`
  background: ${(props) => (props.backgroundURL ? `url(${props.backgroundURL})` : props.backgroundColor)};
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
`;

export default Post;
