import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { Link } from "react-router-dom";
const Create = ({ Books, setBooks }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [addis, setAddis] = useState("");
  const addHander = (e) => {
    e.preventDefault();
    if (!name || !desc || !price) {
      swal("Please, add the required fields ! ");
    } else {
      axios
        .post(" https://cyan-pig-sock.cyclic.app/api/books", {
          name: name,
          description: desc,
          price: price,
          detials: addis,
        })
        .then(() => {
          swal(`You saved the book with the name "${name}", succefully !`);
          setBooks([
            ...Books,
            {
              name: name,
              description: desc,
              price: price,
              detials: addis,
            },
          ]);
          setName("");
          setDesc("");
          setPrice("");
          setAddis("");
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="create">
      <div className="backHolder">
        <Link to="/">Back</Link>
      </div>{" "}
      <h2>Save A New Book</h2>
      <form onSubmit={(e) => addHander(e)}>
        <div className="form-grp">
          <label htmlFor="name">
            Book Name <span className="important">*</span>:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Write Book Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="description">
            Description <span className="important">*</span> :
          </label>
          <textarea
            name="description"
            value={desc}
            cols="30"
            rows="10"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Write Book description"></textarea>
        </div>
        <div className="form-grp">
          <label htmlFor="price">
            Price <span className="important">*</span>:
          </label>
          <input
            type="number"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Book Price"
          />
        </div>
        <div className="form-grp">
          <label htmlFor="additional">Additional informations :</label>
          <input
            type="text"
            name="additional"
            value={addis}
            onChange={(e) => setAddis(e.target.value)}
            placeholder="Additional details"
          />
        </div>
        <div className="addBtn">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
