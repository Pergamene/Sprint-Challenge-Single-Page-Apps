import axios from 'axios';

class GetRequest {

  // https://cors-anywhere.herokuapp.com/ in front to prevent errors
  static async getRequest(pageNumber, setNumberOfChars) {
    const url = new URL('https://rickandmortyapi.com/api/character/');
    url.searchParams.append('page', pageNumber);
    const response = await axios.get(url);
    setNumberOfChars(response.data.info.count);
    return response.data.results;
  }

  static async getRequestSearch(searchParamsArr, setNumberOfChars) {
    const url = new URL('https://rickandmortyapi.com/api/character/');
    if (searchParamsArr[0] !== '') {
      url.searchParams.append('name', searchParamsArr[0]);
    }
    if (searchParamsArr[1] !== '') {
      url.searchParams.append('status', searchParamsArr[1]);
    }
    if (searchParamsArr[2] !== '') {
      url.searchParams.append('species', searchParamsArr[2]);
    }
    if (searchParamsArr[3] !== '') {
      url.searchParams.append('gender', searchParamsArr[3]);
    }
    const response = await axios.get(url);
    setNumberOfChars(response.data.info.count);
    return response.data.results;
  }
}

export default GetRequest;
