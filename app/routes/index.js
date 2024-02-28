const router = require("express").Router();

const Auth = require("./authRouter");
const User = require("./userRouter");
const Havy = require("./havyEquipmentRouter");

router.use("/api/v1/auth", Auth);
router.use("/api/v1/user", User);
router.use("/api/v1/havy", Havy);

module.exports = router;
