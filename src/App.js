import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Signup} from '@/pages/Signup/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={Signup()}/>    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
