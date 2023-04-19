import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import AllCreatures from './components/allCreatures';
import SavedCreatures from './components/savedCreatures';
import MoreCreatureInfo from './components/moreCreatureInfo';

function App() { 
  return (
    <div>
      <div>
        <nav>
          <div className='Header33'><Link to='/' className="nav-item nav-link">Home</Link></div>
          <div className='Header33'><Link to='/savedCreatures' className="nav-item nav-link">Saved Creatures</Link></div>
          <div className='Header33'><Link to='/allCreatures' className="nav-item nav-link">All Creatures</Link></div>
        </nav>
      </div> 
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/allCreatures' element={<AllCreatures/>} />
          <Route path='/savedCreatures' element={<SavedCreatures/>} />
          <Route path='/moreCreatureInfo' element={<MoreCreatureInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
