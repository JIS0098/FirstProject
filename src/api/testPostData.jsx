async function tPostData(data) {
  try {
    const res = await fetch("https://rolling-api.vercel.app/2-1/recipients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const resData = await res.json();
      console.log("서버 응답:", resData);
    } else {
      throw new Error(res.status);
    }
  } catch (e) {
    console.error("네트워크 요청 에러:", e);
  }
}

const data = {
  name: "28521985921592757857",
  backgroundColor: "beige",
  backgroundImageURL: null,
  createdAt: "2023-11-01T08:00:09.135025Z",
  messageCount: 0,
  recentMessages: [],
  reactionCount: 0,
  topReactions: [],
};

tPostData(data);

// {
// 	"id": 32,
// 	"recipientId": 2,
// 	"sender": "김하은",
// 	"profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
// 	"relationship": "가족",
// 	"content": "열심히 일하는 모습 멋있습니다.",
// 	"font": "Pretendard",
//   "createdAt": "2023-11-01T08:05:25.399056Z"
// }

// {
//   id: data.id,
//   recipientId: data.recipientId,
//   sender: data.sender,
//   profileImageURL: data.profileImageURL,
//   relationship: data.relationship,
//   content: data.content,
//   font: data.font,
//   createdAt: data.createdAt,
// }

//    id: 21321321,
//   recipientId: 21321321,
//   sender: "dqwdq",
//   profileImageURL: "",
//   relationship: "가족",
//   content: "바보",
//   font: "Pretendard",
//   createdAt: "2023-11-01T08:05:25.399056Z",

export default tPostData;
