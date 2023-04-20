const express =  require("express")
const IndexController = require("../controller/indexController");

const router = express.Router();


router.get("/testing", IndexController.testing);

module.exports = router;
