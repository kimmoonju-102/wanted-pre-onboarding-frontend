import { Route, Routes } from "react-router-dom";
import { Signup, Signin, Todo } from "@/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
