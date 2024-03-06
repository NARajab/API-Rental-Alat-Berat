const router = require("express").Router();

const Auth = require("../controller/authController");
const authenticate = require("../middlewares/autentikasi");

router.post("/login", Auth.login);
router.get("/authMe", authenticate, Auth.authenticate);

module.exports = router;
