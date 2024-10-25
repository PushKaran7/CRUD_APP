const express=require("express");
const { getAllItems, getItemById, createItem, updateItemById, deleteItemById } = require("../controllers/itemController");
// const getAllItems = require("../controllers/itemController");

const router=express.Router();

router.route("/").get(getAllItems);

router.route("/:id").get(getItemById);

router.route("/").post(createItem);

router.route("/:id").put(updateItemById);

router.route("/:id").delete(deleteItemById);

module.exports=router;