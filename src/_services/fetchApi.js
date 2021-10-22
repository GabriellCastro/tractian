const URL_ASSETS = 'https://my-json-server.typicode.com/tractian/fake-api/assets';
async function fetchApi() {
  try {
    const response = await fetch(URL_ASSETS);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default fetchApi;
