const db = require("../models");
const fs = require("fs");

// get all books
module.exports.readBook = (req, res) => {
  db.Book.findAll().then((books) => res.send(books));
};

// get book by id
module.exports.readBookByID = (req, res) => {
  db.Book.findAll({
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
  //   db.Book.create({
  //     title: req.body.title,
  //     subtitle: req.body.subtitle,
  //     cover: req.body.cover,
  //     writer: req.body.writer,
  //     publishingHouse: req.body.publishingHouse,
  //     publicationDate: req.body.publicationDate,
  //     description: req.body.description,
  //   })
  //     .then(() => {
  //       res.status(201).json({ message: "Book added !" });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       res.status(400).json({ error });
  //     });
  // };
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
module.exports.updateBook = (req, res) => {
  db.Book.update(
    {
      title: req.body.title,
      subtitle: req.body.subtitle,
      writer: req.body.writer,
      publishingHouse: req.body.publishingHouse,
      publicationDate: req.body.publicationDate,
      description: req.body.description,
    },
    {
      where: { id: req.body.id },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Book has been update!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};
