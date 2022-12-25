import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Focus from "../components/Focus.js";
import Footer from "../components/Footer.js";
import axios from 'axios';
import { getBook } from "../utils/path";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (isLoad) {
      axios
        .get(getBook)
        .then(function (res) {
          const sort = res.data.reverse();
          console.log(res.data);
          setBooks(sort);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    setIsLoad(false);
  }, [isLoad]);

  return (
    <div>
      <Navbar />
      {/*affichage des livres*/}
      {books.length}
      {books.map((book =>
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.subtitle}</td>
          <td>{book.cover}</td>
          <td>{book.writer}</td>
          <td>{book.publishingHouse}</td>
          <td>{book.publicationDate}</td>
          <td>{book.description}</td>
        </tr>
        // <Focus
        // key={i}
        // book={book}
        // setIsLoad={setIsLoad}
        // isLoad={isLoad}
        // />
        ))}
        <Footer />
    </div>
    );
}

export default Home;
