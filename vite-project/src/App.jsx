// src/App.js
import Reg from './log-in/Reg.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Reg />} />
    </Routes>
</Router>
  )
}

export default App;