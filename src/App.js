import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from '../src/Components/table';
import User from '../src/Components/user';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
