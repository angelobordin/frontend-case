import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import { IBanking } from "./Pages/IBanking";
import { Login } from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/ibanking" element={<IBanking />} />
      </Routes>
    </Router>
  );
}

export default App;
