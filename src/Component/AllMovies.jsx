import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
// const APIKEY = process.env.APIKEY;
// const URL = process.env.URL;
// const TYPE = process.env.TYPE;

const APIKEY="0763f16dab94a5ac160c265e57fa1eb9";
const URL="https://api.themoviedb.org/3";
const TYPE="trending/all/day";
const IMAGE_URL= "https://api.themoviedb.org/3/movie/movie_id/images"

const Row = ({title,trendingMovies=[{

}]}) => {
    return(
        <>
            <h5>{title}</h5>     
            <div>
                <div className="moveListImages">
                    {
                        trendingMovies.map((item, index) => (
                            <Cards key={index} img={`${IMAGE_URL}/${item.poster_path}`}/>
                        ))
                    }
                </div>
            </div>
        </ >
    )
}

 
const AllMovies = () => {

    const [MoviesData, setMoviesData] = useState([])

    useEffect(() => {
        const fetcData = async() => {
            const {data} = await axios.get(`${URL}/${TYPE}?api_key=${APIKEY}`);
            console.log(data.results[0])
            setMoviesData(data.results)
        }
        fetcData()
    },[])

    return(
        <>
            <Row title={"Trending Movies"} trendingMovies={MoviesData}/>
        </>
    )
}
export default AllMovies;