
import axios from 'axios';

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/stocks');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getData;
