import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
// const APIKEY = process.env.APIKEY;
// const URL = process.env.URL;
// const TYPE = process.env.TYPE;
// const IMAGE_URL = process.env.IMAGE_URL;

const APIKEY="0763f16dab94a5ac160c265e57fa1eb9";
const URL="https://api.themoviedb.org/3";
const trendingMovies ="trending/all/day";
const trendingTvShows ="trending/tv/day";
const IMAGE_URL= "https://image.tmdb.org/t/p/w500";

const Row = ({title,arr=[{

}]}) => {
    return(
        <>
            <h5>{title}</h5>     
            <div>
                <div className="moveListImages">
                    {
                        arr.map((item, index) => (
                            <Cards key={index} img={`${IMAGE_URL}${item.poster_path}`}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
 
const AllMovies = () => {

    const [MoviesData, setMoviesData] = useState([])
    const [MovieTrendingTvShows, setMovieTrendingTvShows] = useState([])

    useEffect(() => {
        const fetcData = async () => {
            try {
                const {data:{results: moviesResults}} = await axios.get(`${URL}/${trendingMovies}?api_key=${APIKEY}`);
                const {data:{results: tvShowsResults}} = await axios.get(`${URL}/${trendingTvShows}?api_key=${APIKEY}`);
                setMoviesData(moviesResults)
                setMovieTrendingTvShows(tvShowsResults)
            } catch (error) {
                console.log(error)
            }
        }
    fetcData()
    },[])
    
    return(
        <>
            <Row title={"Trending Movies"} arr={MoviesData}/>
            <Row title={"Trending Tv Shows"} arr={MovieTrendingTvShows}/>
        </>
    )
}
export default AllMovies;