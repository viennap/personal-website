const { Pool } = require('pg');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
dotenv.config(); 

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};
// requests are only accepted from the specified origin (port 5173)
app.use(cors(corsOptions));

// fruits key mapped to array of fruits
app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "strawberry", "banana"]});
});

// defining GET endpoints
app.get("/api/projects", async (req, res) => {
    const category = req.query.category;

    try {
        let result;
        if (category == undefined) {
            result = await pool.query('SELECT * FROM projects');
        }
        else {
            result = await pool.query('SELECT * FROM projects WHERE category = $1', [category]);
        }
        res.json({"projects": result.rows});
    }
    catch(err){
        console.log(err);
        res.status(500).send('Server error!');
    };
});

app.get("/api/work", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM jobs');
        res.json({"work": result.rows});
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error!');
    }
});

// defining POST endpoints
app.post("/api/projects", async (req, res) => {
    // this is the information for the new project being posted
    const {title, description, category, link} = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO projects (title, description, category)
             VALUES ($1, $2, $3) RETURNING *`,
            [title, description, category]
        );
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.log(err); 
        res.status(500).send('Server error!');
    }
});

// run our app
// listens for any requests that might be sent to our backend
app.listen(8080, () => {
    console.log("Server started on port 8080.");
});