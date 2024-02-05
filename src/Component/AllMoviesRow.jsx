import React from "react";

const RAllMoviesRowow = ({title,trendingMovies=[{

}]}) => {
    return(
        <>
            <h5>{title}</h5>     
            <div>
                <div className="moveListImages">
                    {
                        trendingMovies.map((item, index) => (
                            <Cards key={index} img={`${IMAGE_URL}${item.poster_path}`}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllMoviesRow;