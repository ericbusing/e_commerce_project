const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/all", bookController.readBook);
router.post("/new", bookController.postNewBook);
router.get("/find/:id", bookController.readBookByID);
router.delete("/delete/:id", bookController.deleteBook);
router.put("/update", bookController.updateBook);

module.exports = router;
