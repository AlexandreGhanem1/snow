import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/your-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};