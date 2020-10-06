import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID U7v3kXoUOmICioQBk7Ef_467MBGbhoNg6P-P-vOhMWk'
    }
})