const express =  require("express")
const IndexController = require("../controller/indexController");

const router = express.Router();


router.post("/contact", IndexController.contact);
router.post("/subscrib", IndexController.subscrib);

module.exports = router;
