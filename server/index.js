const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const pool = require("./db");
const path = require("path");

//Midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

//Routes
app.post("/drivers-year", async (req, res) => {
  try {
    const year = req.body.year;
    //console.log(year);
    const drivers = await pool.query(
      "select * from f1_drivers_data where year=$1",
      [year]
    );
    res.json(drivers.rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/driver", async (req, res) => {
  try {
    const name = req.body.name;
    console.log(name);
    const driver = await pool.query(
      "select * from f1_drivers_data where name=$1",
      [name]
    );
    //console.log(driver.rows);
    res.json(driver.rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/team", async (req, res) => {
  try {
    const team = req.body.team;
    console.log(team);
    const teams = await pool.query(
      "select * from f1_drivers_data where team=$1",
      [team]
    );
    //console.log(driver.rows);
    res.json(teams.rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/country", async (req, res) => {
  try {
    const country = req.body.country;
    console.log(country);
    const nationality = await pool.query(
      "select * from f1_drivers_data where nationality=$1",
      [country]
    );
    //console.log(driver.rows);
    res.json(nationality.rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/years", async (req, res) => {
  try {
    const years = await pool.query(
      "select distinct year from f1_drivers_data order by year"
    );
    res.json(years.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
