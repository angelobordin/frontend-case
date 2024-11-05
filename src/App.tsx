import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import { IBanking } from "./Pages/IBanking";
import { Login } from "./Pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/ibanking" element={<IBanking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
