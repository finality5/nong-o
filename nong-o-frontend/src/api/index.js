import axios from 'config/axios';

export const sendMessage = async (message) => {
  const response = await axios.post('/send_message', { message });
  console.log('response: ', response);
};
