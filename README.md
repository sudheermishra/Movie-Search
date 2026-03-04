# Movie-Search

Movie-Search is a React-based web application that allows users to search and explore movies using an open-source movie API.

The project demonstrates modern React Router (v6+) data APIs with loaders, dynamic routing, modular CSS, and reusable component architecture.

------------------------------------------------------------

## Overview

This application allows users to:

- Search for movies
- View a list of matching results
- Navigate to a detailed movie page
- View complete movie information including poster, plot, ratings, and more

The project uses React Router loaders for data fetching and dynamic routes for individual movie pages.

------------------------------------------------------------

## Features

Movie Search  
Users can search movies using a search form connected to the open movie API.

Movie Listing  
Search results are displayed as reusable MovieCard components.

Movie Detail Page  
Dynamic route: /detail/:imdbID  
Displays complete movie information fetched using the IMDb ID.

Modern Routing  
Implemented using:

- createBrowserRouter
- createRoutesFromElements
- Nested Routes
- Route Loaders for data fetching

Reusable Components  
- MovieCard  
- MovieList  
- SearchForm  

CSS Modules  
Each component uses modular CSS for scoped styling and maintainable UI structure.

------------------------------------------------------------

## API Used

This project uses the OMDb API (Open Movie Database).

API Source:  
http://www.omdbapi.com/

The API provides:

- Movie search by title
- Detailed movie data by IMDb ID
- Ratings, posters, runtime, genre, plot, etc.

An API key is required and stored in a constants file.

------------------------------------------------------------

## Routing Structure

The app uses nested routing:

/  
├── Home (index route)  
└── /detail/:imdbID (Single Movie Detail Page)

Example:

<Route path="/" element={<Root />}>
  <Route index element={<Home />} loader={movieLoader} />
  <Route
    path="/detail/:imdbID"
    element={<SingleMovieDetail />}
    loader={singleMovieLoader}
  />
</Route>

Loaders are used to fetch data before rendering pages.

------------------------------------------------------------

## Project Structure

src/
├── App.jsx
├── Constants.js
├── pages/
│   ├── Root.jsx
│   ├── Home.jsx
│   ├── SingleMovieDetail.jsx
│   ├── Root.module.css
│   ├── SingleMovieDetail.module.css
│
├── components/
│   ├── MovieCard.jsx
│   ├── MovieCard.module.css
│   ├── MovieList.jsx
│   ├── MovieList.module.css
│   ├── SearchForm.jsx
│   ├── SearchForm.module.css

------------------------------------------------------------

## Data Fetching Strategy

React Router loaders are used to:

- Fetch movie list data before rendering Home
- Fetch movie details before rendering SingleMovieDetail
- Prevent UI flickering
- Improve user experience by ensuring data is ready on navigation

Example loader usage:

export const loader = async ({ params }) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${params.imdbID}`
  );
  return response.json();
};

------------------------------------------------------------

## Tech Stack

Frontend:
- React
- React Router (v6 Data APIs)

Styling:
- CSS Modules

API:
- OMDb Open Movie API

------------------------------------------------------------

## How to Run the Project

1. Clone the repository

git clone <your-repository-url>
cd movie-search

2. Install dependencies

npm install

3. Add your OMDb API key inside Constants.js

export const apiKey = "YOUR_API_KEY";

4. Start the development server

npm run dev

The application will run on:

http://localhost:5173

------------------------------------------------------------

## Future Improvements

- Add pagination
- Add loading states
- Add error boundaries
- Add watchlist feature using localStorage
- Add debounce for search input
- Improve UI animations

------------------------------------------------------------

## Developer

Sudheer Mishra  
MCA Graduate (2025)  
Focused on Full Stack and Frontend Development
