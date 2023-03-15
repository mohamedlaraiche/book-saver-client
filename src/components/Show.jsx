import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../styles/style.css";
const Show = ({ Books, setBooks, isLoaded }) => {
  const Deleteandler = (e, id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this saved book!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        e.preventDefault();
        axios
          .delete(`https://cyan-pig-sock.cyclic.app/api/books/${id}`)
          .then(setBooks(Books.filter((book) => book._id !== id)))
          .catch((err) => console.log(err.message));
        swal("Poof! Your Saved Book has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Book  file is safe!");
      }
    });
  };
  return (
    <div>
      <div className="addHolder">
        <Link to="create">Add New Book</Link>
      </div>
      <section className="cartsHolder">
        {isLoaded === false ? (
          Books.length <= 0 ? (
            <p> Please Add Book first </p>
          ) : (
            Books.map((book) => (
              <section key={book._id} className="cart">
                <h2> {book.name} </h2>
                <p>{book.description}</p>
                <p>{book.detials}</p>
                <h4> {book.price} </h4>
                <Link to={`/${book._id}`}> Update </Link>
                <button
                  className="delBtn"
                  onClick={(e) => Deleteandler(e, book._id)}>
                  Delete
                </button>
              </section>
            ))
          )
        ) : (
          <p>Loading...</p>
        )}
      </section>
      {/* <Link to="update">update Book</Link> */}
    </div>
  );
};

export default Show;
