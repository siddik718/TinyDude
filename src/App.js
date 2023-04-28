import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Stats from './components/Stats';

function App() {
  return (
    <HashRouter>
    // define routes inside the Routes component
      <Routes>
      // define a route to the Home component for the root path
        <Route path='/' element={<Home />} />
        // define a route to the Home component for the index path
        <Route index element={<Home />} />
        // define a route to the Stats component for the stats path
        <Route path="stats" element={<Stats />} />
      </Routes>
    </HashRouter>
);
}

export default App;
