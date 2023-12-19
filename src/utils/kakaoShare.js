import { useEffect } from "react";

const { Kakao } = window;

function kakaoShare() {
  // 배포한 자신의 사이트
  const url = "https://developers.kakao.com";

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init("b46c2aec1f0938765d1a14de7d7fe8e8");
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "롤링 페이퍼",
        description: "해주고싶었던 말 해줘요",
        imageUrl: "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: url,
        },
      },
      buttons: [
        {
          title: "작성하러 가기",
          link: {
            mobileWebUrl: url,
          },
        },
      ],
    });
  };

  return shareKakao;
}

export default kakaoShare;
