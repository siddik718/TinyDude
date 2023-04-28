import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Stats from './components/Stats';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path="stats" element={<Stats />} />
      </Routes>
    </HashRouter>
);
}

export default App;
