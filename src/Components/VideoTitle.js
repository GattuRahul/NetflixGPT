const VideoTitle = ({ title, description }) => {
    return (
        <div className=" w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600 w-1/4">{description}</p>
            <div className="mt-4 space-x-4">
                <button className="bg-white text-black px-8 py-2 rounded-md hover:bg-opacity-80">Play</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md">More info</button>
            </div>
        </div>
    )
}

export default VideoTitle;