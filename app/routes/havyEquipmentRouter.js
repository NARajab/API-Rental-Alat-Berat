const router = require("express").Router();

const Havy = require("../controller/havyEquipmentController");

router.post("/create", Havy.creatHavyEquipment);
router.patch("/update/:id", Havy.updateHavyEquipment);

module.exports = router;
