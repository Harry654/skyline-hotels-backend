const express = require("express");
const route = express.Router();
const {
    handleNewReview,
    handleGetReviews
} = require("../controllers/review.controller");

route.post("/new", handleNewReview);
route.post("/", handleGetReviews);