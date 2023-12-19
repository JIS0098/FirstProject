const BASE_URL = "https://rolling-api.vercel.app/2-1";

async function fetcher(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function testData(pageId) {
  return fetcher(`/recipients/${pageId}/messages/?limit=1000`);
}

export async function testDataEmoji(pageId) {
  return fetcher(`/recipients/${pageId}/reactions/`);
}

export async function testDataAll() {
  return fetcher(`/recipients/?limit=1000`);
}

export async function emojiPost(dataEmoji, pageId) {
  try {
    const response = await fetch(`${BASE_URL}/recipients/${pageId}/reactions/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataEmoji),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error in emojiPost:", error);
    throw error;
  }
}

// 페이지 지우기
export async function deletePage(pageId) {
  try {
    const response = await fetch(`${BASE_URL}/recipients/${pageId}/`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    return response.json();
  } catch (error) {
    console.error("Error in deleteApi:", error);
    throw error;
  }
}

export async function deleteCard(deleteData) {
  try {
    const response = await fetch(`${BASE_URL}/messages/1178/`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    return response.json();
  } catch (error) {
    console.error("Error in deleteApi:", error);
    throw error;
  }
}
