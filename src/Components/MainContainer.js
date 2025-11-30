import { API_OPTIONS } from "../utilities/constants";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addVideoDetails } from "../utilities/moviesSlice";

const MainContainer = () => {
    const moviesList = useSelector(state => state.movies?.nowPlayingMovies);
    const dispatch = useDispatch();

    const movieVideos = async () => {
        const videos = await fetch("https://api.themoviedb.org/3/movie/"+moviesList[1]?.id+"/videos?language=en-US", API_OPTIONS);

        const videoData = await videos.json();
        const videoTrailersData = videoData?.results?.filter(video => video.type === "Trailer");
        const videoTrailerDetails = videoTrailersData ? videoTrailersData[0] : videoData?.results[0];
        dispatch(addVideoDetails(videoTrailerDetails));
    }

    useEffect(() => {
        if(moviesList.length > 0)
        movieVideos();
    }, [moviesList]);

    return (
        <div>
            <VideoBackground />
            <VideoTitle title={moviesList[0]?.original_title} description={moviesList[0]?.overview} />
        </div>
    )
}

export default MainContainer;