import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebaseConfig from './firebaseConfig';

import MainMenu from './screens/mainMenu';
import Customers from './screens/customers';
import AddNewCustomer from './screens/addNewCustomer/addNewCustomer';
import './App.css'

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(firebaseApp);

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
        <Route path='/customers' element={<Customers firebaseDb={firebaseDb} />} />
        <Route path='/addNewCustomer' element={<AddNewCustomer firebaseDb={firebaseDb}/>} />
        <Route path='/' element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
