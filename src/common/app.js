export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_BASE ?? 'https://api.cosmicjs.com/v1/cole-portfolio',
    responseType: 'json',
    params: {
        read_key: process.env.VUE_APP_READ_KEY
    }
})