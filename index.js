// Import necessary modules
import express from "express"; // Express is a web framework for Node.js used to handle routing
import axios from "axios"; // Axios is used to make HTTP requests (in this case, to an external API)
import bodyParser from "body-parser"; // Body-Parser is middleware to parse the body of incoming POST requests

// Create an instance of the Express application
const app = express();
const port = 3000; // Define the port number the server will listen on

// API endpoint for anime data
const animeList = 'https://api.jikan.moe/v4/anime';

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse URL-encoded data from forms (for POST requests)
app.use(bodyParser.urlencoded({extended: true}));

// Set EJS as the view engine to render dynamic HTML content
app.set("view engine", "ejs");

// Route to handle the homepage ("/") request
app.get("/", async (req, res) => {
    try {
        // Make a GET request to fetch a list of anime
        const result = await axios.get('https://api.jikan.moe/v4/anime');
        // Render the "index.ejs" template, passing the fetched data to the template
        res.render("index.ejs", { content: result.data.data });
    } catch (error) {
        // Log the error and send a 500 status response if the API request fails
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

// Route to handle requests for top anime ("/topAnimes")
app.get("/topAnimes", async (req, res) => {
    try {
        // Make a GET request to fetch top anime
        const result = await axios.get('https://api.jikan.moe/v4/top/anime');
        // Render the "index.ejs" template, passing the fetched data to the template
        res.render("index.ejs", { content: result.data.data });
    } catch (error) {
        // Log the error and send a 500 status response if the API request fails
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

// Route to handle requests for currently airing anime ("/nowAiring")
app.get("/nowAiring", async (req, res) => {
    try {
        // Make a GET request to fetch currently airing anime
        const result = await axios.get('https://api.jikan.moe/v4/seasons/now');
        // Render the "index.ejs" template, passing the fetched data to the template
        res.render("index.ejs", { content: result.data.data });
    } catch (error) {
        // Log the error and send a 500 status response if the API request fails
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

// Route to handle requests for upcoming anime seasons ("/seasonsUpcoming")
app.get("/seasonsUpcoming", async (req, res) => {
    try {
        // Make a GET request to fetch upcoming anime seasons
        const result = await axios.get('https://api.jikan.moe/v4/seasons/upcoming');
        // Render the "index.ejs" template, passing the fetched data to the template
        res.render("index.ejs", { content: result.data.data });
    } catch (error) {
        // Log the error and send a 500 status response if the API request fails
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

// Route to handle requests for specific anime details ("/anime/:id")
app.get("/anime/:id", async (req, res) => {
    const animeId = req.params.id; // Get the anime ID from the URL parameter
    try {
        // Make a GET request to fetch the anime details using the anime ID
        const result = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}/full`);
        // Render the "anime-details.ejs" template, passing the fetched data to the template
        res.render("anime-details.ejs", { content: result.data.data });
    } catch (error) {
        // Log the error (including detailed error response) and send a 500 status response if the API request fails
        console.error(error.response ? error.response.data : error.message);
        res.status(500).send("Error fetching anime details");
    }
});

// Route to handle search functionality ("/search")
app.post("/search", async (req, res) => {
    const searchAnime = req.body.search; // Get the search query from the POST request body
    console.log(searchAnime); // Log the search term for debugging purposes
    try {
        // Make a GET request to search for anime using the provided query
        const result = await axios.get(animeList + "?q=" + searchAnime);
        // Render the "index.ejs" template, passing the search results to the template
        res.render("index.ejs", { content: result.data.data });
    } catch (error) {
        // Log the error and send a 500 status response if the API request fails
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on ${port}`); // Log a message when the server starts
});
