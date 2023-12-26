import { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import CustomerCard from '../customerCard/customerCard';



function CustomersList(props) {
    let [loading, setLoading] = useState(true);
    let [customersList, setcustomersList] = useState();
    
    const customersRef = ref(props.firebaseDb, 'clientes');

    onValue(customersRef, (snapshot) => {
        const res = Object.entries(snapshot.val());
        if (customersList === undefined) {
            setcustomersList(res);
            setLoading(false);
        }
    })

    useEffect(() => {
        console.log('customersList', customersList);
        console.log('loading', loading);
    }, [loading, customersList]);

    return loading ? (<div>Loading...</div>) : (
        <div className='customersList'>
            {customersList.map((customer, i) => {
                return <CustomerCard key={customer[0]} id={customer[0]} nombre={customer[1].nombre} apellido={customer[1].apellido} documento={customer[1].documento} correo={customer[1].correo} telefono={customer[1].telefono} />
            })}
        </div>
    );
}

export default CustomersList;