const express = require("express");
const ExampleController = require("../controllers/Example");
const wrapper = require("../helpers/wrapper");
const router = express.Router();

router.get("/", wrapper(ExampleController.all));
router.post("/", wrapper(ExampleController.add));

module.exports = router;
