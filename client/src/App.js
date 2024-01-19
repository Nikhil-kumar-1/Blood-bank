import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loginu from "./pages/auth/Loginu";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginu />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
