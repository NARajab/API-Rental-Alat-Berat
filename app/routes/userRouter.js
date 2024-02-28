const router = require("express").Router();

const User = require("../controller/userController");

router.get("/", User.getAllUser);
router.get("/get", User.getOneUser);
router.post("/create", User.createUser);
router.patch("/update/:id", User.updateUser);

module.exports = router;
