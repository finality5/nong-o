import axios from 'config/axios';

export const sendMessage = async (message) => {
  const response = await axios.post('/send_message', { message });
  const { data } = response;

  return data.message || 'วอท ดู ยู มีน';
};
