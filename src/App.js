import { Route, Routes } from "react-router-dom";
import { Home, Signup, Signin, Todo } from "@/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
