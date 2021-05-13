"use strict";

const express = require("express");
const HttpStatus = require("http-status-codes");

const interceptors = require("../interceptors");
const models = require("../../models");

const router = express.Router();

router.get("/", async function (req, res) {
  const row = await models.Expense.findAll();
  res.json(row);
});

router.post("/", interceptors.requireLogin, async function (req, res) {
  const expense = models.Expense.build(req.body);
  try {
    if (!expense) {
      expense = models.Expense.build(req.body);
      expense.CategoryId = 0;
      await expense.save();
    } else {
      await expense.update(req.body);
    }
    res.status(HttpStatus.CREATED).json(expense);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get("/:id", async function (req, res) {
  const expense = await models.Expense.findByPk(req.params.id);
  if (expense) {
    res.json(expense);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch("/:id", interceptors.requireLogin, async function (req, res) {
  const expense = await models.Expense.findByPk(req.params.id);
  if (expense) {
    try {
      await expense.update(req.body);
      res.status(HttpStatus.OK).end();
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.delete("/:id", interceptors.requireLogin, async function (req, res) {
  const expense = await models.Expense.findByPk(req.params.id);
  if (expense) {
    await expense.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
