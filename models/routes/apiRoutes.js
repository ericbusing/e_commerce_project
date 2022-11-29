const express = require("express");
const router = require("router");
const db = require("../../models");

router.get("/all", (req, res) => {
  db.Book.findAll().then((books) => res.send(books));
});
