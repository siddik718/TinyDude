import './App.css';
// import HashRouter, Route and Routes components from react-router-dom library
import {HashRouter, Route, Routes} from 'react-router-dom'
// import Home component from Home.js file
import Home from './components/Home';
// import Stats component from Stats.js file
import Stats from './components/Stats';

function App() {
  return (
    // wrap the routes inside a HashRouter component
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
    //close the HashRouter component
);
}

export default App;
