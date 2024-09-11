import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import MyEvents from './pages/MyEvents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos/:id" element={<Event />} />
        <Route path="/mis-eventos" element={<MyEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
