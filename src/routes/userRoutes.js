const express = require('express');
const router = express.Router();
const empService = require('../service/employeeService')

//Route 1: Registering Profile in Database (POST: "/register")
router.get('/employees', async (req, res, next) => {
    try {
      let data = await empService.getEmpData()
      console.log('routes ===',data);
      if (data) {
        res
          .status(200)
          .json(data);
      }
    } catch (error) {
      res
        .status(400)
        .json("Something went wrong");
      //Going to the error handler middleware
  
    }
  });

  module.exports = router;