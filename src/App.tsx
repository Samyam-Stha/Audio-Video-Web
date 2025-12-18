import { Routes, Route } from "react-router-dom";

// import Room from "./routes/room";
import User from "./components/user/user";
import Home from "./components/home/Home";
export default function App() {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
