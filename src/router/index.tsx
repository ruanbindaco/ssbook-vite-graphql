import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookInfo from "../pages/BookInfo";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:bookId" element={<BookInfo />} />
    </Routes>
  );
};

export default Router;
