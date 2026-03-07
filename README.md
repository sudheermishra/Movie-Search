# 🎬 Movie Search App

A React.js web application to search and explore movies using the OMDb API. Built to demonstrate modern **React Router v6 Data APIs** with loaders, dynamic routing, and reusable component architecture.

🌐 **Live Site:** *
https://movienamesearch.netlify.app/

---

## 📸 Preview
<img width="1083" height="842" alt="Image" src="https://github.com/user-attachments/assets/c0d112dc-454b-4245-82ff-71affac63fb3" />



---

## ✨ Features

- 🔍 Search any movie by title
- 🎴 Browse results as reusable MovieCard components
- 📄 Dynamic detail page per movie — poster, plot, ratings, runtime, genre
- ⚡ React Router loaders fetch data before rendering — no UI flicker
- 🧩 CSS Modules for scoped, maintainable styling

---

## 🛠 Tech Stack

- **React.js** — Component-based UI
- **React Router v6** — Data APIs, loaders, nested & dynamic routes
- **OMDb API** — Open Movie Database for real movie data
- **CSS Modules** — Scoped styling per component
- **Vite** — Fast development build tool

---

## 📁 Project Structure

```
src/
├── App.jsx
├── Constants.js              # API key stored here
├── pages/
│   ├── Root.jsx
│   ├── Home.jsx
│   └── SingleMovieDetail.jsx
└── components/
    ├── MovieCard.jsx
    ├── MovieList.jsx
    └── SearchForm.jsx
```

---

## 🔀 Routing Structure

```
/
├── Home (index route — search + movie list)
└── /detail/:imdbID (single movie detail page)
```

Uses `createBrowserRouter` and `createRoutesFromElements` with **route loaders** to fetch data before page renders.

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/sudheermishra/Movie-Search.git

# Navigate into the folder
cd Movie-Search

# Install dependencies
npm install

# Add your OMDb API key in Constants.js
# Get free key at: https://www.omdbapi.com/apikey.aspx

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 API Setup

This project uses the **OMDb API** (free tier available).

1. Get your free API key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx)
2. Open `src/Constants.js`
3. Replace the placeholder:

```js
export const apiKey = "YOUR_API_KEY_HERE";
```

---

## 📬 Contact

- **Email:** sudheermishra8587@gmail.com
- **LinkedIn:** [linkedin.com/in/sudheer-mishra-b7302a258](https://www.linkedin.com/in/sudheer-mishra-b7302a258/)
- **GitHub:** [github.com/sudheermishra](https://github.com/sudheermishra)
- **Portfolio:** [sudheermishra.netlify.app](https://sudheermishra.netlify.app)

---

⭐ If you found this useful, feel free to give it a star!
