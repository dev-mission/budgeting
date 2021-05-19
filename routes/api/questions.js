"use strict";

const express = require("express");
const HttpStatus = require("http-status-codes");

const interceptors = require("../interceptors");
const models = require("../../models");

const router = express.Router();

router.get("/", async function (req, res) {
  const questions = await models.Questions.findAll();
  res.json(questions);
});

router.post("/", interceptors.requireLogin, async function (req, res) {
  const questions = models.Questions.build(req.body);
  try {
    await question.save();
    res.status(HttpStatus.CREATED).json(question);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get("/:id", async function (req, res) {
  const questions = await models.Questions.findByPk(req.params.id);
  if (questions) {
    res.json(questions);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

questions.patch("/:id", interceptors.requireLogin, async function (req, res) {
  const questions = await models.Questions.findByPk(req.params.id);
  if (questions) {
    try {
      await questions.update(req.body);
      res.status(HttpStatus.OK).end();
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.delete("/:id", interceptors.requireLogin, async function (req, res) {
  const questions = await models.Questions.findByPk(req.params.id);
  if (questions) {
    await questions.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;