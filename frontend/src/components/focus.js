
import { useEffect, useState } from "react";
import "../styles/styles.scss";
import FormData from "form-data";
import axios from "axios";
import { modifyBook, deleteBook } from "../utils/path";

const Focus = (props) => {
  const { books, auth, setIsLoad, isLoad } = props;
  const [modify, setModify] = useState(false);
  const [changePicture, setChangePicture] = useState(false);
  const [description, setDescription] = useState(books.description);
  const [cover, setCover] = useState(books.cover);

  // Permet de modifier un post.
  const updatePost = (e) => {
    e.preventDefault();
    if (changePicture) {
      const data = new FormData();
      data.append(
        "cover",
        e.target.image.files[0],
        e.target.image.files[0].name
      );
      data.set("description", description);
      data.set("userId", auth.userId);
      axios
        .put(modifyBook + books.id, data, {
          headers: {
            "Content-Type": `multipart/form-data`,
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then(function (res) {
          setIsLoad(true);
          setModify(false);
          setChangePicture(false);
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      axios
        .put(
          modifyBook + books.id,
          {
            description: description,
            // userId: auth.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then(function (res) {
          setIsLoad(true);
          setModify(false);
          setChangePicture(false);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (isLoad) {
      setDescription(books.description);
    }
  }, [isLoad, books.description]);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  // Permet de supprimer un post.
  const erasePost = () => {
    axios
      .delete(deleteBook + books.id, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then(function (res) {
        setIsLoad(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  
  return (
    <div className="post">
      {!modify ? (
        <>
          <div className="data-post">
            {(auth.userId === books.userId || auth.admin) && (
              <div className="trashEdit">
                {/* <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={(e) => erasePost(e)}
                  className="trash"
                />
                <FontAwesomeIcon
                  icon={faPencil}
                  className="edit"
                  onClick={() => {
                    setModify(!modify);
                    setIsLoad(true);
                  }}
                /> */}
              </div>
            )}
          </div>
          <div className="text-picture">
            <div className="message">{books.description}</div>
            <img src={books.cover} alt={books.id} />
          </div>
        </>
      ) : (
        <>
          <form className="post-form" onSubmit={(e) => updatePost(e)}>
            <input
              type="text"
              id="post"
              className="post-input"
              placeholder="Commence ton post"
              value={description}
              onChange={(e) => handleChange(e)}
            />
            <div className="image">
              <img src={cover} alt="" />
            </div>
            <div className="image-submit">
              <input
                type="file"
                name="image"
                id="image"
                className="post-image"
                onChange={(e) => {
                  setCover(URL.createObjectURL(e.target.files[0]));
                  setChangePicture(true);
                }}
              />
              <input
                type="submit"
                name="submit"
                id="submit"
                className="post-submit"
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Focus;