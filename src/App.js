import {Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import Rent from './components/Rent';
import Sale from './components/Sale';
import Search from './components/Search';
import Favourite from './components/Favourite';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
