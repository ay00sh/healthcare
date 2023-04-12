const express = require("express"); 
const router = express.Router();
const {getpage,getregister,getlogin,postdata} = require("../controllers/contactcontroller")


router.route('/').get(getpage);
router.route("/register").get(getregister);
router.route('/login').get(getlogin);
router.route('/login').post(postdata);

module.exports = router;