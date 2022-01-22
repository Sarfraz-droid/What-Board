import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import DrawingBoard from './DrawingBoard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DrawingBoard />} />
      </Routes>
    </Router>
  );
}


/*
 TODO : Drawing area change on resize
 TODO : Ability to change color
 TODO : Ability to change thickness
*/
