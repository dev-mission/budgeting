"use strict";

const express = require("express");
const HttpStatus = require("http-status-codes");

const interceptors = require("../interceptors");
const models = require("../../models");

const router = express.Router();

router.get("/", async function (req, res) {
  const row = await models.Category.findAll();
  res.json(row);
});

router.post("/", interceptors.requireLogin, async function (req, res) {
  const category = models.Category.build(req.body);
  try {
    await category.save();
    res.status(HttpStatus.CREATED).json(category);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get("/:id", async function (req, res) {
  const category = await models.Category.findByPk(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch("/:id", interceptors.requireLogin, async function (req, res) {
  const category = await models.Category.findByPk(req.params.id);
  if (category) {
    try {
      await category.update(req.body);
      res.status(HttpStatus.OK).end();
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.delete("/:id", interceptors.requireLogin, async function (req, res) {
  const category = await models.Category.findByPk(req.params.id);
  if (category) {
    await category.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
