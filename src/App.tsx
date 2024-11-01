import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import { IBanking } from "./components/IBanking";
import { Login } from "./components/Login";

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
