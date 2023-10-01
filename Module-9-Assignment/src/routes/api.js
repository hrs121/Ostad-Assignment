const express = require('express');

const userController=require("../controllers/userController")
const subAdminController=require("../controllers/subAdminController")
const postController=require("../controllers/postController")
const adminController=require("../controllers/adminController")

const router = express.Router();

router.get("/user/create",userController.create)
router.get("/user/read",userController.read)
router.get("/user/delete",userController.delete)
router.get("/user/update",userController.update)

router.get("/subAdmin/create",subAdminController.create)
router.get("/subAdmin/read",subAdminController.read)
router.get("/subAdmin/delete",subAdminController.delete)
router.get("/subAdmin/update",subAdminController.update)

router.get("/post/create",postController.create)
router.get("/post/read",postController.read)
router.get("/post/delete",postController.delete)
router.get("/post/update",postController.update)

router.get("/admin/create",adminController.create)
router.get("/admin/read",adminController.read)
router.get("/admin/delete",adminController.delete)
router.get("/admin/update",adminController.update)


module.exports = router;
