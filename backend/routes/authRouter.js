const router = require("express").Router();
const { googleLogin } = require("../controllers/authController");




router.get("/test", (req, res) => {
	res.send("passed");
});
router.get("/google", googleLogin);

module.exports = router;
