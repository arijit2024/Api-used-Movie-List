import React from "react";
const trendingMovies ="trending/all/day";
const IMAGE_URL= "https://image.tmdb.org/t/p/w500";

const Slider = (src) => {
    console.log(src.src[0].poster_path)
    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                    <img src={`${IMAGE_URL}${src.src[0].poster_path}`} className="d-block w-100" alt="..."/>
                    </div> */}
                    {/* <div className="carousel-item">
                    <img src={`${IMAGE_URL}${src.src[1].poster_path}`} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={`${IMAGE_URL}${src.src[2].poster_path}`} className="d-block w-100" alt="..."/>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider;