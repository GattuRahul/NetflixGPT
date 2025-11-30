import Header from "./Header";
import useNowPlayingMovies from "../utilities/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default Browse;
