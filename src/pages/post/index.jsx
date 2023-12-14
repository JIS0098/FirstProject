import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import PostModal from "./PostModal";
import ShareComplete from "./ShareComplete";
import testData from "../../api/testFeatData";

function Post() {
  const [showShare, toggleShare] = useToggle(false);
  const [showModal, toggleModal] = useToggle(false);
  const [emojiAdd, toggleEmoji] = useToggle(false);
  const [share, setShare] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    testData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <PostBack>
      <PostHeader toggleShare={toggleShare} toggleEmoji={toggleEmoji} />
      <PostWrap data={data} showShare={showShare} emojiAdd={emojiAdd} setShare={setShare} toggleModal={toggleModal} />

      {/* modal */}
      {showModal ? <PostModal toggleModal={toggleModal} /> : null}

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
