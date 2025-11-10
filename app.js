// app.js

const axios = require('axios');

// Configurable backend URL
global.config = { backendUrl: 'https://your-backend-api-url.com/' };

/**
 * Function to make GET request
 * @param {string} endpoint - API endpoint
 * @returns {Promise<Object>} - Response data
 */
const getData = async (endpoint) => {
    try {
        const response = await axios.get(`${config.backendUrl}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

/**
 * Function to make POST request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Data to be sent in request body
 * @returns {Promise<Object>} - Response data
 */
const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${config.backendUrl}${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// Example usage
// getData('example-endpoint').then((data) => console.log(data));
// postData('example-endpoint', { key: 'value' }).then((data) => console.log(data));

module.exports = { getData, postData };