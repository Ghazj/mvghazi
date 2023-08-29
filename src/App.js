import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './screens/mainMenu';
import Customers from './screens/customers';
import AddNewCustomer from './screens/addNewCustomer/addNewCustomer';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>
          <button className='headerButton'>Menú principal</button>
        </Link>
        <Link to='/customers'>
          <button className='headerButton'>Clientes</button>
        </Link>
      </header>

      <Routes>
        <Route path='/customers' element={<Customers />} />
        <Route path='/addNewCustomer' element={<AddNewCustomer />} />
        <Route path='/' element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
