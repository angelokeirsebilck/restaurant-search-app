import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          term: searchTerm,
          location: 'Knokke-Heist',
          limit: 50,
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      console.log('error:', error.response.data.error.description);
      setErrorMessage('Something went wrong.');
    }
  };

  return [searchApi, results, errorMessage];
};
