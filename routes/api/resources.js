"use strict";

const express = require("express");
const HttpStatus = require("http-status-codes");

const interceptors = require("../interceptors");
const models = require("../../models");

const router = express.Router();

router.get("/", async function (req, res) {
  const resouces = await models.Resource.findAll();
  res.json(resouces);
});

router.post("/", interceptors.requireLogin, async function (req, res) {
  const resource = models.Resource.build(req.body);
  try {
    await resource.save();
    res.status(HttpStatus.CREATED).json(resource);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    console.log(error);
  }
});

router.get("/:id", async function (req, res) {
  const resource = await models.Resource.findByPk(req.params.id);
  if (resource) {
    res.json(resource);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch("/:id", interceptors.requireLogin, async function (req, res) {
  const resource = await models.Resource.findByPk(req.params.id);
  if (resource) {
    try {
      await resource.update(req.body);
      res.status(HttpStatus.OK).end();
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.delete("/:id", interceptors.requireLogin, async function (req, res) {
  const resource = await models.Resource.findByPk(req.params.id);
  if (resource) {
    await resource.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
