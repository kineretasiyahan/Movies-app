const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const API_KEY3 = process.env.API_KEY3;

const getAllMovies = async (req, res) => {
    try {
        const api_url = `https://imdb-api.com/en/API/MostPopularMovies/k_8kg6mdib`;
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
        const api_url = `https://www.omdbapi.com/?i=${req.params.id}&apikey=7edb05ae`;
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