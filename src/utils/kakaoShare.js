const { Kakao } = window;

function shareKakao(kakao) {
  // 배포한 자신의 사이트
  const url = `https://2-2-1-rolling.netlify.app/${kakao}`;

  // init 해주기 전에 clean up 을 해준다.
  Kakao.cleanup();
  // 자신의 js 키를 넣어준다.
  Kakao.init("b46c2aec1f0938765d1a14de7d7fe8e8");
  // 잘 적용되면 true 를 뱉는다.

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "롤링 페이퍼",
      description: "해주고 싶었던 말 적어주세요😀",
      imageUrl:
        "https://private-user-images.githubusercontent.com/124851297/292082403-5aaefcdf-a474-4c88-a7db-87e46a6a0a1f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMxMzczMjAsIm5iZiI6MTcwMzEzNzAyMCwicGF0aCI6Ii8xMjQ4NTEyOTcvMjkyMDgyNDAzLTVhYWVmY2RmLWE0NzQtNGM4OC1hN2RiLTg3ZTQ2YTZhMGExZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIyMVQwNTM3MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNjE1ZTNjMDkxZmZiZWYyYzljYTkwMjljOTkzZGUzMzI0N2MxNDM1MWQ0N2JlZjYwODQyNTE3Y2E2NzMzMTU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.98jsbvnN8SmgZyBIaK7kj6-23bEdGdcD-18LRkhaRkM",
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
}

export default shareKakao;
