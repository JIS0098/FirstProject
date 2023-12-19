import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import ShareComplete from "./ShareComplete";
import { getMessageByPaperId, getEmojiByPaperId, getRollingPaper } from "api";
import { useParams } from "react-router-dom";

function Post() {
  const [showShare, toggleShare] = useToggle(false);
  const [emojiAdd, toggleEmoji] = useToggle(false);
  const [share, setShare] = useState(false);
  const [data, setData] = useState([]);
  const [dataEmoji, setDataEmoji] = useState([]);
  const [idSelectName, setIdSelectName] = useState([]);
  const [emojiUp, setEmojiUp] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const pageId = useMemo(() => params.id, [params.id]);

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
      <PostWrap data={data} pageId={pageId} />

      {/* URL이 복사되었습니다. */}
      {share ? <ShareComplete /> : null}
    </PostBack>
  ) : (
    <div>..loading</div>
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

export default Post;
