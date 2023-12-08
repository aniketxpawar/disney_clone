import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '553751b686bdc733fad8780096f8f176'
//https://api.themoviedb.org/3/trending/all/day?api_key=553751b686bdc733fad8780096f8f176
const getTrendingVideos = async() => {
    return await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
    
}
export default{
    getTrendingVideos
}