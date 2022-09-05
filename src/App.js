import './App.css';
import Homepage from '../src/pages/homepage';
import ShopPage from './pages/shop/shop';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header/header';

function App() {
  return (
    <div>
          <Header/> 
      <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/shop' element={<ShopPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
