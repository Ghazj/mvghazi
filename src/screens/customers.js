import CustomersList from '../components/customersList/customersList';
import { Link } from 'react-router-dom';
function Customers() {
    return (
        <div className='customersScreen'>
            <Link to='/addNewCustomer'>
                <button>Añadir nuevo cliente</button>
            </Link>
            <h1>Customers:</h1>
            <h2>Filtro de lista</h2>
            <CustomersList />
        </div>
    );
}

export default Customers;