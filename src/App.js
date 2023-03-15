  import axios from "axios";
  import { useState, useEffect } from "react";
  import RouterLinks from "./routes";
  import "./styles/style.css";
  function App() {
    const [Books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const getBooks = async () => {
      setIsLoaded(true);
      const response = await axios.get("http://localhost:5000/api/books");
      const data = await response.data;
      setBooks(data.data);
      setIsLoaded(false);
    };
    useEffect(() => {
      getBooks();
    }, []);
    return (
      <div className="container">
        <h1 className="title">Books Saver</h1>
        <RouterLinks Books={Books} setBooks={setBooks} isLoaded={isLoaded} />
      </div>
    );
  }

  export default App;
