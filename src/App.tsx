import { Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";

// import Room from "./routes/room";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
export default function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0.1rem",
          left: "0.1rem",
          zIndex: 1000,
        }}
      >
        <ThemeToggle />
      </div>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
