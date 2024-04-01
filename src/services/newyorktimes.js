import axios from 'axios';

const fetchArticlesBySection = async (section) => {
  const baseURL = 'https://api.nytimes.com/svc/topstories/v2';
  const apiKey = process.env.REACT_APP_NEWYORKTIMES_API_KEY;
  try {
    const response = await axios.get(`${baseURL}/${section}.json`, {
      params: { 'api-key': apiKey },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }

};

export default fetchArticlesBySection;
