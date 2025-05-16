# Movie Roast

Movie Roast is a fun web app where users can roast their favorite bad movies. Built with HTML, CSS and JavaScript.

## Features

- Browse, search and filter through movies and reviews.
- Post reviews and comment on existing ones.
- [TMDB](https://developer.themoviedb.org/docs/getting-started) integration to get an updated list of bad movies.

## Project Structure

```plaintext
/MovieRoast
│
├── /assets/           # Icons and image assets
├── /data/             # Static JSON data
├── /pages/            # HTML for different pages
│   ├── /profile/
│   ├── /reviews/
│   └── /movies/
│
├── /scripts/
│   ├── main.js        # Handles initialization and shared features
│   ├── /api/          # Handles data fetching from JSON and API
│   ├── /pages/        # JS for specific pages
│   └── /components/   # Reusable components
│
├── /style/
│   └── global.css     # Shared styling across all pages
│
└── index.html         # Home page
```

## Run locally

- Clone or download the repo
- Open index.html in a browser

## How to contribute

### GitHub usage

- Pick and assign yourself to a relevant issue
- Create and checkout to a new branch
- Keep commits clean and concise.
- Use keywords, eg. "added" component, "fixed" bug, etc.
- Make a pull request when done and wait for a review.
- Fix any merge conflicts

### Adding new pages

- Create a folder in /pages/ for HTML files
- Create a folder in /scripts/pages/ for JS files
- Make sure the JS file name matches the corresponding HTML
- Write styles in global.css

### Components

- /scripts/components/yourComponent.js
- Exported as function
- Returns document.createElement()
- Use innerHTML to add more content
- Keep component specific logic in the file
- Write styles in global.css

### Adding or updating data

- Modify relevant .json file in /data/
- Use /scripts/api/ to fetch data

### General guidelines

- Use components where possible to keep code modular
- Keep naming consistent
  - kebab-case (folders, HTML)
  - camelCase (scripts, variables)
  - snake_case (JSON object keys)
- Use prettier for code formating
