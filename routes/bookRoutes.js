const router = require("express").Router();
const bookController = require("../controllers/bookController");
const multer = require("../middleware/multer-config");

router.get("/all", bookController.readBook);
router.post("/new", multer, bookController.postNewBook);
router.get("/find/:id", bookController.readBookByID);
router.delete("/delete/:id", multer, bookController.deleteBook);
router.put("/update/:id", multer, bookController.updateBook);

module.exports = router;
