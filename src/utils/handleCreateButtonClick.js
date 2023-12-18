import { createRollingPaper } from "api";

const handleCreateButtonClick = async ({ name, backgroundColor, backgroundImageURL, navigate }) => {
  const newData = {
    name,
    backgroundColor,
    backgroundImageURL,
    createdAt: new Date().toISOString(),
    messageCount: 0,
    recentMessages: [],
    reactionCount: 0,
    topReactions: [],
  };

  try {
    const resData = await createRollingPaper(newData);
    navigate(`/post/${resData?.id}`);
  } catch (error) {
    console.error(error);
  }
};

export default handleCreateButtonClick;
