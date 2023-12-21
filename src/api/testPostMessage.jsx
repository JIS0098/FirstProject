export const testPostMessage = async postData => {
  try {
    const res = await fetch(`https://rolling-api.vercel.app/2-1/recipients/${postData?.recipientId}/messages/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (e) {
    console.error('네트워크 요청 에러:', e);
  }
};
