async function testData() {
  try {
    const response = await fetch("https://rolling-api.vercel.app/1-7/recipients/714/messages/?limit=1000");
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch {
    (e) => {
      console.log(e);
    };
  }
}
export default testData;
