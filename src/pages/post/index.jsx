import React, { useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import PostHeader from "./PostHeader";
import PostWrap from "./PostWrap";
import PostModal from "./PostModal";
import ShareComplete from "./ShareComplete";

function Post() {
  const [showShare, toggleShare] = useToggle(false);
  const [showModal, toggleModal] = useToggle(false);
  const [emojiAdd, toggleEmoji] = useToggle(false);
  const [share, setShare] = useState(false);

  return (
    <PostBack>
      <PostHeader toggleShare={toggleShare} toggleEmoji={toggleEmoji} />
      <PostWrap showShare={showShare} emojiAdd={emojiAdd} setShare={setShare} toggleModal={toggleModal} />

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
