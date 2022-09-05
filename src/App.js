import './App.css';
import Homepage from '../src/pages/homepage';
import ShopPage from './pages/shop/shop';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header/header';
import Signin from './pages/sign-in/sign-in';
function App() {
  return (
    <div>
          <Header/> 
      <Router>
      <Routes>

        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/shop' element={<ShopPage/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
