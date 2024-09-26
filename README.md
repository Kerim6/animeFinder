Here’s a sample README file for your project:

---

# Anime Finder

Anime Finder is a web application that allows users to search and view information about anime using the [Jikan API](https://jikan.moe/). It provides features such as searching for anime, viewing top-rated anime, currently airing anime, upcoming seasons, and individual anime details.

## Features

- **Search Anime**: Allows users to search for anime based on keywords.
- **Top Anime**: Displays the top-rated anime.
- **Currently Airing Anime**: Lists anime currently being broadcast.
- **Upcoming Anime Seasons**: Shows anime that are scheduled for future seasons.
- **Anime Details**: View detailed information about a specific anime.

## Technologies Used

- **Node.js**: Backend framework to run the server.
- **Express.js**: Web application framework used for handling routes.
- **Axios**: HTTP client for making API requests to the Jikan API.
- **EJS**: Embedded JavaScript templating engine for rendering dynamic HTML content.
- **Body-Parser**: Middleware for parsing incoming request bodies.
- **Jikan API**: Free API that provides data from [MyAnimeList.net](https://myanimelist.net/).

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Kerim6/animeFinder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd anime-finder
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the server:

   ```bash
   node index.js
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Available Routes

- `/`: Fetch and display all anime.
- `/topAnimes`: View top-rated anime.
- `/nowAiring`: View anime that is currently airing.
- `/seasonsUpcoming`: View upcoming anime in the next seasons.
- `/anime/:id`: View detailed information about a specific anime.
- `/search`: Search for anime based on a keyword.


## Contributing

Feel free to submit pull requests to enhance the project or fix bugs.
