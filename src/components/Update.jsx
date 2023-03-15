import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const Update = ({ Books, setBooks }) => {
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newAddis, setNewAddis] = useState("");
  const { id } = useParams();
  const updateHandler = (e) => {
    e.preventDefault();
    if (!newName || !newDesc || !newPrice) {
      swal("Please, update the required fields or click 'back' ! ");
    } else {
      axios
        .put(`http://localhost:5000/api/books/${id}`, {
          id: id,
          name: newName,
          description: newDesc,
          price: newPrice,
          detials: newAddis,
        })
        .then(() => {
          swal(`You Update the book with the name "${newName}", succefully !`);
          setBooks([
            ...Books,
            {
              id: id,
              name: newName,
              description: newDesc,
              price: newPrice,
              detials: newAddis,
            },
          ]);
          setNewName("");
          setNewDesc("");
          setNewPrice("");
          setNewAddis("");
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="create">
      <div className="backHolder">
        <Link to="/">Back</Link>
      </div>
      <h2>Update a Book</h2>
      <form onSubmit={(e) => updateHandler(e)}>
        <div className="form-grp">
          <label htmlFor="name">
            New Name <span className="important">*</span>:
          </label>
          <input
            type="text"
            name="name"
            value={newName}
            placeholder="Write Book Name"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="description">
            New Description <span className="important">*</span> :
          </label>
          <textarea
            name="description"
            value={newDesc}
            cols="30"
            rows="10"
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Write Book description"></textarea>
        </div>
        <div className="form-grp">
          <label htmlFor="price">
            New Price <span className="important">*</span>:
          </label>
          <input
            type="number"
            value={newPrice}
            name="price"
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Book Price"
          />
        </div>
        <div className="form-grp">
          <label htmlFor="additional">New Additionals:</label>
          <input
            type="text"
            name="additional"
            value={newAddis}
            onChange={(e) => setNewAddis(e.target.value)}
            placeholder="Additional details"
          />
        </div>
        <div className="addBtn">
          <button type="submit">Update Book</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
