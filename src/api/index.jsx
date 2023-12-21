import { BASE_URL } from "../constants";

/**
 * API 요청을 위한 기본 fetch 함수.
 * @param {String} url - 요청할 api 주소
 * @param {*} options - GET 요청 이외의 경우 options 추가
 * @returns {Promise} API 응답을 Promise 형태로 반환
 */
async function fetcher(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * fetch 요청을 위한 옵션 생성 함수.
 * @param {String} method - HTTP 메소드 (기본값: "POST")
 * @param {Object} headers - HTTP 헤더 (기본값: 'application/json')
 * @param {Object} data - 서버에 전송할 데이터
 * @returns {Object} fetch 함수에 사용될 옵션 객체
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
 * 특정 페이지 ID로 메시지 데이터를 불러오는 함수.
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns {Promise} 메시지 데이터를 Promise 형태로 반환
 */
export async function getMessageByPaperId(pageId) {
  return fetcher(`/recipients/${pageId}/messages/?limit=1000`);
}

/**
 * 특정 페이지 ID로 이모지 데이터를 불러오는 함수.
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns {Promise} 이모지 데이터를 Promise 형태로 반환
 */
export async function getEmojiByPaperId(pageId) {
  return fetcher(`/recipients/${pageId}/reactions/`);
}

/**
 * 모든 롤링 페이퍼 데이터를 불러오는 함수.
 * @returns {Promise} 롤링 페이퍼 데이터를 Promise 형태로 반환
 */
export async function getRollingPaperAll() {
  return fetcher(`/recipients/?limit=1000`);
}

/**
 * 특정 롤링 페이퍼 ID로 롤링 페이퍼 데이터를 불러오는 함수.
 * @param {String} pageId - 가지고 올 페이지 아이디
 * @returns {Promise} 롤링 페이퍼 데이터를 Promise 형태로 반환
 */
export async function getRollingPaper(pageId) {
  return fetcher(`/recipients/${pageId}/`);
}

/**
 * 새로운 롤링 페이퍼를 생성하는 함수.
 * @param {Object} postData - 저장될 옵션 (team, name, backgroundColor, backgroundImageURL)
 * @returns {Promise} 생성된 롤링 페이퍼 데이터를 Promise 형태로 반환
 */
export async function createRollingPaper(postData) {
  return fetcher(`/recipients/`, options({ data: postData }));
}

/**
 * 특정 페이지에 이모지를 추가하는 함수.
 * @param {Object} dataEmoji - 추가할 이모지 데이터 (emoji, type)
 * @param {String} pageId - 이모지를 추가할 페이지 아이디
 * @returns {Promise} 작업 결과를 Promise 형태로 반환
 */
export async function addEmojiToPage(dataEmoji, pageId) {
  return fetcher(`/recipients/${pageId}/reactions/`, options({ data: dataEmoji }));
}

/**
 * 새 메시지를 롤링 페이퍼에 게시하는 함수.
 * @param {Object} postData - 게시할 데이터 (recipientId, message, sender)
 * @returns {Promise} 게시된 메시지 데이터를 Promise 형태로 반환
 */
export async function postMessage(postData) {
  return fetcher(
    `/recipients/${postData?.recipientId}/messages/`,
    options({
      data: postData,
    })
  );
}

/**
 * 특정 페이지를 삭제하는 함수.
 * @param {String} pageId - 삭제할 페이지 아이디
 * @returns {Promise} 작업 결과를 Promise 형태로 반환
 */
export async function deletePage(pageId) {
  return fetcher(`/recipients/${pageId}/`, options({ method: "DELETE" }));
}

/**
 * 특정 페이지에서 카드(메시지)를 삭제하는 함수.
 * @param {String} postId - 삭제할 카드(메시지)의 아이디
 * @returns {Promise} 작업 결과를 Promise 형태로 반환
 */
export async function deleteCardFromPage(postId) {
  return fetcher(`/messages/${postId}/`, options({ method: "DELETE" }));
}
