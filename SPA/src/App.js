import { Routes, Route, Link } from 'react-router-dom';
import HomeTest from './components/hometest';
import Test from './components/test';
import Test2 from './components/test2';

function App() { 
  return (
    <div>
      <div>
        <nav>
          <Link to='/' className="nav-item nav-link">hometest</Link>
          <Link to='/test' className="nav-item nav-link">test</Link>
          <Link to='/test2' className="nav-item nav-link">test2</Link>
        </nav>
      </div> 
      <Routes>
          <Route path='/' element={<HomeTest/>} />
          <Route path='/test' element={<Test/>} />
          <Route path='/test2' element={<Test2/>} />
      </Routes>
    </div>
  );
}

export default App;
