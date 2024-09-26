import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const animeList = 'https://api.jikan.moe/v4/anime';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const result = await axios.get('https://api.jikan.moe/v4/anime');
        // console.log(result.data); // Log the actual data
        res.render("index.ejs", { content: result.data.data }); // Pass the data object
    } catch (error) {
        console.error(error); // Log the entire error object for better debugging
        res.status(500).send("Error fetching data");
    }
});

app.get("/topAnimes", async (req, res) => {
    try {
        const result = await axios.get('https://api.jikan.moe/v4/top/anime');
        // console.log(result.data); // Log the actual data
        res.render("index.ejs", { content: result.data.data }); // Pass the data object
    } catch (error) {
        console.error(error); // Log the entire error object for better debugging
        res.status(500).send("Error fetching data");
    }
});

app.get("/nowAiring", async (req, res) => {
    try {
        const result = await axios.get('https://api.jikan.moe/v4/seasons/now');
        // console.log(result.data); // Log the actual data
        res.render("index.ejs", { content: result.data.data }); // Pass the data object
    } catch (error) {
        console.error(error); // Log the entire error object for better debugging
        res.status(500).send("Error fetching data");
    }
});

app.get("/seasonsUpcoming", async (req, res) => {
    try {
        const result = await axios.get('https://api.jikan.moe/v4/seasons/upcoming');
        // console.log(result.data); // Log the actual data
        res.render("index.ejs", { content: result.data.data }); // Pass the data object
    } catch (error) {
        console.error(error); // Log the entire error object for better debugging
        res.status(500).send("Error fetching data");
    }
});

app.get("/anime/:id", async (req, res) => {
    const animeId = req.params.id; // Get the anime ID from the URL parameter
    try {
        const result = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}/full`); // Fetch anime details
        res.render("anime-details.ejs", { content: result.data.data }); // Render the details page and pass the data
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).send("Error fetching anime details");
    }
});

app.post("/search", async (req, res) => {
    const searchAnime = req.body.search;
    console.log(searchAnime);
    try {
        const result = await axios.get(animeList + "?q=" +searchAnime);
        // console.log(result.data); // Log the actual data
        res.render("index.ejs", { content: result.data.data }); // Pass the data object
    } catch (error) {
        console.error(error); // Log the entire error object for better debugging
        res.status(500).send("Error fetching data");
    }
})



app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})

