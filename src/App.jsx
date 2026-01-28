import { apiKey } from "./Constants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SingleMovieDetail from "./pages/SingleMovieDetail";

import { loader as movieLoader } from "./pages/Home";
import { loader as singleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} loader={movieLoader} />
      <Route
        path="/detail/:imdbID"
        element={<SingleMovieDetail />}
        loader={singleMovieLoader}
      />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
