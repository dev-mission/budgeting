'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');

const router = express.Router();

router.get('/overview', interceptors.requireLogin, async function(req, res, next) {
  const row = models.Budget.findByPk(req.params.month)
  if (row) {
    await row.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.post('/budgetgoals', function(req, res, next) {
    const row = models.Budget.build(req.body)
    try {
        await row.save();
        res.status(201).json(row);      //save and return the new data
    } catch (error) {                   // if not returnt the error
        console.log(error);
        res.status(422).json(error);
    }
  
});


router.patch('/:id', interceptors.requireLogin, async function(req, res) { //M
    const row = await models.Budget.findByPk(req.params.id);
    if (row) {
      try {
        await row.update(req.body);
        res.status(HttpStatus.OK).end();  
      } catch (error) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
      }
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  
});

module.exports = router;
