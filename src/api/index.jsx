import { BASE_URL } from "../constants";

/**
 *
 * @param {String} url - 요청할 api 주소
 * @param {*} options - get 요청 이외의 경우 options 추가
 * @returns
 */
async function fetcher(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/** fetch 요청을 위한 옵션 생성.
 * @param {String} method - POST 요청을 기본값으로 가짐.
 * @param {Object} headers - 'application/json'을 기본값으로 가짐.
 * @param {Object} data - 서버에 전송할 데이터.
 * @returns
 */
const options = ({
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  data = {},
} = {}) => ({
  method,
  headers,
  body: JSON.stringify(data),
});

/**
 * 선택한 페이지 내에 있는 메시지 데이터를 불러옴.
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns - Promise로 감쌓인 메시지 데이터
 */
export async function getMessageByPaperId(pageId) {
  return fetcher(`/recipients/${pageId}/messages/?limit=1000`);
}

/**
 * 선택한 롤링 페이퍼 내에 있는 이모지 데이터를 불러옴.
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns - Promise로 감쌓인 이모지 데이터
 */
export async function getEmojiByPaperId(pageId) {
  return fetcher(`/recipients/${pageId}/reactions/`);
}

//모든 롤링 페이퍼를 가져옴.
export async function getRollingPaperAll() {
  return fetcher(`/recipients/?limit=1000`);
}
//선택한 롤링 페이퍼를 가져옴.
export async function getRollingPaper(pageId) {
  return fetcher(`/recipients/${pageId}/`);
}

/**
 * 새로운 롤링 페이퍼를 생성.
 * @param {Object} postData - 저장될 옵션
 * {
 *   "team": "string",
 *   "name": "string",
 *   "backgroundColor": "beige",
 *   "backgroundImageURL": "string"
 * }
 * @returns - 생성된 페이퍼에 대한 데이터.
 */
export async function createRollingPaper(postData) {
  console.log(postData);
  return fetcher(`/recipients/`, options({ data: postData }));
}

/**
 *
 * @param {Object} dataEmoji
 * {
 *   "emoji": "string",
 *   "type": "increase" <-- default
 * }
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns
 */
export async function addEmojiToPage(dataEmoji, pageId) {
  return fetcher(`/recipients/${pageId}/reactions/`, options({ data: dataEmoji }));
}

/**
 *
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns
 */
export async function deletePage(pageId) {
  return fetcher(`/recipients/${pageId}/`, options({ method: "DELETE" }));
}

/**
 *
 * @param {String} postId - 가지고 올 페이지 아이디
 * @returns
 */
export async function deleteCardFromPage(postId) {
  return fetcher(`/messages/${postId}/`, options({ method: "DELETE" }));
}
