import express from "express"
import axios from "axios"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://www.nexarda.com/api/v3/status");
        const result = response.data
        res.render("index.ejs", {content: JSON.stringify(result), gameData : null});

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Something went wrong!");
    }
})

app.post("/game-id", async (req, res) => {
    try {
        const response = await axios.get(`https://www.nexarda.com/api/v3/search?type=games&q=${req.body.gameName}&currency=USD&output=json`)
        const result = response.data 
        res.render("index.ejs", {content: null, gameData : JSON.stringify(result)})


    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Something went wrong!");
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})