import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import { IBanking } from "./components/IBanking";
import AuthGuard from "./Utils/auth/auth-guard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          path="/ibanking"
          element={
            <AuthGuard>
              <IBanking />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
