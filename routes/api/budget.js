"use strict";

const express = require("express");
const HttpStatus = require("http-status-codes");

const interceptors = require("../interceptors");
const models = require("../../models");

const router = express.Router();

router.get("/", async function (req, res) {
  const row = await models.Budget.findAll();
  res.json(row);
});

router.post("/", interceptors.requireLogin, async function (req, res) {
  const user = req.user;
  try {
    let budget = await user.getBudget();
    if (!budget) {
      budget = models.Budget.build(req.body);
      budget.UserId = user.id;
      await budget.save();
    } else {
      await budget.update(req.body);
    }
    res.status(HttpStatus.CREATED).json(budget);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    console.log(error);
  }
});

router.get("/:id", async function (req, res) {
  const budget = await models.Budget.findByPk(req.params.id);
  if (budget) {
    res.json(budget);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch("/:id", interceptors.requireLogin, async function (req, res) {
  const budget = await models.Budget.findByPk(req.params.id);
  if (budget) {
    try {
      await budget.update(req.body);
      res.status(HttpStatus.OK).end();
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.delete("/:id", interceptors.requireLogin, async function (req, res) {
  const budget = await models.Budget.findByPk(req.params.id);
  if (budget) {
    await budget.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
