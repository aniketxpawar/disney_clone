import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '553751b686bdc733fad8780096f8f176'
//https://api.themoviedb.org/3/trending/all/day?api_key=553751b686bdc733fad8780096f8f176

const movieByGenreBaseURL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const getTrendingVideos = async() => await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

const getMovieByGenreId = async(id) => await axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos, getMovieByGenreId
}