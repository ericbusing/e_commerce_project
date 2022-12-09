const db = require("../models");
const fs = require("fs");

// get all books
module.exports.readBook = (req, res) => {
  db.Book.findAll().then((books) => res.send(books));
};

// get book by id
module.exports.readBookByID = (req, res) => {
  db.Book.findOne({
    where: { id: req.params.id },
  })
    .then((book) => res.send(book))
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

// post new book
module.exports.postNewBook = async (req, res) => {
  try {
    const book = req.body;
    if (req.file) {
      const bookCreated = await db.Book.create({
        cover: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
        ...book,
      });
      bookCreated.save();
      res.status(201).json({ message: "Book enregistré!" });
    } else {
      const bookCreated = await db.Book.create({
        ...book,
      });
      bookCreated.save();
      res.status(201).json({ message: "Book enregistré!" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

// delete book
module.exports.deleteBook = (req, res) => {
  db.Book.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.status(200).json({ message: "Book has been delete!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

// update a book
module.exports.updateBook = async (req, res) => {
  const id = req.params.id;

  try {
    const bookToUpdate = await db.Book.findOne({
      where: { id },
    });

    const newBook = req.body;
    fileName = bookToUpdate.cover?.split("/images/")[1];

    fs.unlink(`images/${fileName}`, async () => {
      await db.Book.update(
        {
          cover: req.file
            ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
            : bookToUpdate.cover,
          ...newBook,
        },
        { where: { id } }
      );
    });

    res.status(200).json({ message: "Book has been update !" });
    return console.log(newBook);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
};
