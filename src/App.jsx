import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Edit from './Components/Edit';
// import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/edit" element={<Edit user={user} setUser={setUser} />} />
          {/* <Route path="/" element={<Login setUser={setUser} />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
