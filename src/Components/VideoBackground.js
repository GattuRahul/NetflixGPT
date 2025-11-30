import { useSelector } from "react-redux";

const VideoBackground = () => {
    const videoKey = useSelector(state =>state.movies?.videoDetails?.key);

    return (
        <div>
            <iframe 
                className="absolute w-screen aspect-video"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}&rel=0&modestbranding=1`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground;