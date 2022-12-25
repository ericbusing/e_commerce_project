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
      {books.map((book =>
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <img src={book.cover} alt="Couverture du livre" />
          <h2>{book.writer}</h2>
          <p>{book.publishingHouse}</p>
          <p>{book.publicationDate}</p>
          <p>{book.description}</p>
        </div>
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
