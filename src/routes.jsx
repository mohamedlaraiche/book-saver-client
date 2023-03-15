import React from "react";
import { Routes, Route } from "react-router-dom";
import Show from "./components/Show";
import Create from "./components/Create";
import Update from "./components/Update";
const RouterLinks = ({ Books, setBooks, isLoaded }) => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Show Books={Books} setBooks={setBooks} isLoaded={isLoaded} />}
      />
      <Route
        path="/create"
        exact
        element={<Create Books={Books} setBooks={setBooks} />}
      />
      <Route
        path="/:id"
        exact
        element={<Update Books={Books} setBooks={setBooks} />}
      />
    </Routes>
  );
};

export default RouterLinks;
