import axios from 'axios';

class GetRequest {

  // https://cors-anywhere.herokuapp.com/ in front to prevent errors
  static async getRequest(pageNumber) {
    const url = new URL('https://rickandmortyapi.com/api/character/');
    url.searchParams.append('page', pageNumber);
    const response = await axios.get(url);
    return response.data.results;
  }
}

export default GetRequest;
