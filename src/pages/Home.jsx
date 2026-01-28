import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import axios from "axios";
import { apiKey } from "../Constants";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "one piece";

  try {
    const movieSearchEndPoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndPoint);
    return {
      movieApiResponse: response.data,
      searchTerm: searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "something went wrong";
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errorMessage,
    };
  }
}
function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </div>
  );
}

export default Home;
