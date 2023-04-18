import { Routes, Route, Link } from 'react-router-dom';
import HomeTest from './components/hometest';
import AllCreatures from './components/allCreatures';
import Test2 from './components/test2';

function App() { 
  return (
    <div>
      <div>
        <nav>
          <div className='Header33'><Link to='/' className="nav-item nav-link">hometest</Link></div>
          <div className='Header33'><Link to='/test' className="nav-item nav-link">API TEST</Link></div>
          <div className='Header33'><Link to='/test2' className="nav-item nav-link">test2</Link></div>
        </nav>
      </div> 
      <Routes>
          <Route path='/' element={<HomeTest/>} />
          <Route path='/test' element={<AllCreatures/>} />
          <Route path='/test2' element={<Test2/>} />
      </Routes>
    </div>
  );
}

export default App;
