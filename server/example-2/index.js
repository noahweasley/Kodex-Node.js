const express = require("express");
const server = express();
require("dotenv").config();
const logger = require("./middleware/logger");
const Joi = require("joi");

const port = process.env.PORT;
server.use(express.json());
server.use(logger);

server.post("/test", async (req, res) => {
  const body = req.body;
  res.send();
});

server.get("/", (_req, res) => {
  res.status(200).json({ message: "Server is active!" });
});

let universities = [
  { id: 0, name: "Harvard University" },
  { id: 1, name: "Stanford University" },
  { id: 2, name: "Massachusetts Institute of Technology (MIT)" },
  { id: 3, name: "University of Cambridge" },
];

let countries = [
  { id: 1, name: "Nigeria", code: "NG", continent: "Africa" },
  { id: 2, name: "United States", code: "US", continent: "North America" },
  { id: 3, name: "Brazil", code: "BR", continent: "South America" },
  { id: 4, name: "Germany", code: "DE", continent: "Europe" },
  { id: 5, name: "India", code: "IN", continent: "Asia" },
  { id: 6, name: "Australia", code: "AU", continent: "Oceania" },
  { id: 7, name: "Canada", code: "CA", continent: "North America" },
  { id: 8, name: "South Africa", code: "ZA", continent: "Africa" },
  { id: 9, name: "Japan", code: "JP", continent: "Asia" },
  { id: 10, name: "France", code: "FR", continent: "Europe" },
];

server.get("/countries", (request, response) => {
  response
    .status(200)
    .json({ message: "Fetched countries successfully", data: countries });
});

server.get("/temp", (req, res) => {
  res.redirect("/new-temp");
});

server.get("/new-temp", (req, res) => {
  console.log("Doing a lot!");
  res.status(301).send();
});

server.get("/countries/:code", (request, response) => {
  const code = request.params.code.toLowerCase();
  const country = countries.find(
    (country) => country.code.toLowerCase() === code
  );

  response
    .status(200)
    .json({ message: "Fetched countries successfully", data: country });
});

server.get("/universities", (req, res) => {
  const accepted = ["asc", "desc"];
  const order = req.query.order;

  if (!accepted.includes(order)) {
    res.status(400).json({ error: `${order} is not an accepted filter` });
  }

  if (order === "asc") {
    universities = universities.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    universities = universities.sort((a, b) => -a.name.localeCompare(b.name));
  }

  res.status(200).json({
    message: "Successfully fetched universities",
    data: universities,
  });
});

server.get("/universities/:id", (req, res) => {
  const id = req.params.id;
  const uni = universities.find((uni) => uni.id == id);

  if (!uni) {
    return res.status(404).json({ error: "University does not exist" });
  }

  res.status(200).json({
    message: "Successfully fetched the university",
    data: uni,
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
