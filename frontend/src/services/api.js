// frontend/src/services/api.js
import axios from 'axios';

// API endpoint for email subscription
export const subscribeEmail = async (email) => {
    const response = await axios.post('/api/emails/subscribe', { email });
    return response.data;
};
