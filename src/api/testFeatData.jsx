const BASE_URL = "https://rolling-api.vercel.app/1-7";

async function fetcher(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function testData() {
  return fetcher("/recipients/714/messages/?limit=1000");
}

export async function testDataEmoji() {
  return fetcher("/recipients/714/reactions/");
}

export async function testDataAll() {
  return fetcher("/recipients/");
}
