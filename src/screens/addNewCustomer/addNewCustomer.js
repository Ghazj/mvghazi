import { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../firebaseConfig';
import './addNewCustomer.css';

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(firebaseApp);
const customersRef = ref(firebaseDb, 'clientes');

function AddNewCustomer() {
    let [formCustomerData, setformCustomerData] = useState({
        nombre: '',
        apellido: '',
        documento: '',
        correo: '',
        telefono: '',
    });

    let handleChange = (e) => {
        const { placeholder, value } = e.target;
        console.log('event.targe', e.target)
        console.log('name', placeholder)
        console.log('value', value)
        setformCustomerData({
            ...formCustomerData,
            [placeholder]: value
        })
    }

    const sendNewCustomer = (e) => {
        e.preventDefault();
        push(customersRef, formCustomerData);

        console.log('enviando datos...', formCustomerData)
    }

    return (
        <div className='AddNewCustomerScreen'>
            AddNewCustomer
            <form onSubmit={sendNewCustomer}>
                <div className="inputGroup">
                    <label htmlFor='nombre'>Nombre </label>
                    <input onChange={handleChange} type='text' id='nombre' placeholder='nombre' />
                </div>
                <div className="inputGroup">
                    <label htmlFor='apellido'>Apellido </label>
                    <input onChange={handleChange} type='text' id='apellido' placeholder='apellido' />
                </div>
                <div className="inputGroup">
                    <label htmlFor='documento'>Documento </label>
                    <input onChange={handleChange} type='number' id='documento' placeholder='documento' />
                </div>
                <div className="inputGroup">
                    <label htmlFor='correo'>Correo </label>
                    <input onChange={handleChange} type='email' id='correo' placeholder='correo' />
                </div>
                <div className="inputGroup">
                    <label htmlFor='telefono'>Telefono </label>
                    <input onChange={handleChange} type='number' id='telefono' placeholder='telefono' />
                </div>
                <button type='submit'>Cargar nuevo cliente</button>
            </form>
        </div>
    );
}

export default AddNewCustomer;