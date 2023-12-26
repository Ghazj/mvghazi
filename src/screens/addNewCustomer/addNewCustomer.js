import { useState } from 'react';
import { ref, push } from "firebase/database";
import './addNewCustomer.css';
import Input from '../../components/input/input';


function AddNewCustomer(props) {
    const [formCustomerData, setformCustomerData] = useState({
        nombre: '',
        apellido: '',
        documento: '',
        correo: '',
        telefono: ''
    });

    const [nombreState, setNombreState] = useState(null)
    const [apellidoState, setApellidoState] = useState(null)
    const [documentoState, setDocumentoState] = useState(null)
    const [correoState, setCorreoState] = useState(null)
    const [telefonoState, setTelefonoState] = useState(null)

    const regularExpressions = {
        usuario: /^[a-zA-Z0-9\\]{4,16}$/, // Letras, numeros, guion y guion_bajo
        password: /^.{4,12}$/, // 4 a 12 digitos.

        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        documento: /^\d{1,8}$/, // 7 a 14 numeros.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10,11}$/ // 7 a 14 numeros.
    }


    const customersRef = ref(props.firebaseDb, 'clientes');

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log('id', id)
        console.log('value', value)
        setformCustomerData({
            ...formCustomerData,
            [id]: value
        })
    }

    const sendNewCustomer = (e) => {
        e.preventDefault();
        console.log('enviando datos...', formCustomerData)
        push(customersRef, formCustomerData)
            .then((res) => {
                console.log('Cliente cargado correctamente!')
                alert('Cliente cargado correctamente!');
            })
            .catch((error) => {
                console.log('error', error)
            });
    }

    return (
        <div className='AddNewCustomerScreen'>
            AddNewCustomer
            <form onSubmit={sendNewCustomer}>
                <Input id='name' label='Nombre:' handleChange={handleChange} type='text' placeholder='Ingresa el nombre del cliente ej: Jorgen de Jesús' error='El nombre ingresado no es válido' regularExpression={regularExpressions.nombre} state={nombreState}/>

                <Input id='apellido' label='Apellido:' handleChange={handleChange} type='text' placeholder='Ingresa el apellido del cliente ej: Ghazi Marquett' error='El apellido ingresado no es válido' regularExpression={regularExpressions.apellido} />

                <Input id='documento' label='documento:' handleChange={handleChange} type='number' placeholder='Ingresa el documento del cliente todo junto sin números ej: 26157901' error='El documento ingresado no es válido' regularExpression={regularExpressions.documento} />

                <Input id='correo' label='Correo:' handleChange={handleChange} type='email' placeholder='Ingresa el correo del cliente ej: ghazi@mvghazi.com' error='El correo ingresado no es válido' regularExpression={regularExpressions.correo} />

                <Input id='telefono' label='Telefono:' handleChange={handleChange} type='tel' placeholder='Ingresa el telefono del cliente ej: Jorgen de Jesús' error='El telefono ingresado no es válido' regularExpression={regularExpressions.telefono} />

                <button type='submit'>Cargar nuevo cliente</button>
            </form>
        </div>
    );
}

export default AddNewCustomer;