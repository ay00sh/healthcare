const express = require("express"); 
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const hbs = require("hbs");

const connectDb = require("./config/dbconnection");
const contactsRouter = require("./routes/contacts");

const { setAppViewEngine } = require("./config/configpath");

// Set up hbs
setAppViewEngine(app);

// Connect to database
//connectDb();

// Middleware
app.use(express.json());
app.use(contactsRouter);

const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});