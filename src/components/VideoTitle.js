

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" w-screen aspect-video pt-[12%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

            <div>
                <button className="bg-white text-black mt-4 p-2 md:px-10 py-2 text-lg md:mt-0 rounded-lg hover:bg-opacity-80">▶ play</button>
                <button className="hidden md:inline-block bg-gray-500 mx-2 text-white px-6 p-2 text-lg bg-opacity-50 rounded-lg">More Info ℹ</button>
            </div>
        </div>
    );
};

export default VideoTitle
