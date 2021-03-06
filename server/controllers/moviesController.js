const fetch = require('node-fetch');
const API_KEY_ALL_MOVIES = process.env.API_KEY_ALL_MOVIES;
const API_KEY_CURRENT_MOVIE = process.env.API_KEY_CURRENT_MOVIE;

const getAllMovies = async (req, res) => {
    try {
        const api_url = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY_ALL_MOVIES}`;
        const fetch_response = await fetch(api_url).then((res) => {
            return res.json();
        })
            .catch((error) => {
                if (error) throw error
            })
        res.status(200).json({
            sucsses: true,
            data: fetch_response,
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            sucsses: false,
            data: error,
        })
    }
}
const getMovieById = async (req, res) => {
    try {
        console.log(req.params.id);
        const api_url = `https://www.omdbapi.com/?i=${req.params.id}&apikey=${API_KEY_CURRENT_MOVIE}`;
        const fetch_response = await fetch(api_url).then((res) => {
            return res.json();
        })
            .catch((error) => {
                if (error) throw error
            })

        res.status(200).json({
            sucsses: true,
            data: fetch_response,
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            sucsses: false,
            data: error,
        })
    }
}
module.exports = { getAllMovies, getMovieById }