import React, { Component } from 'react';
import './listaClientes.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { database } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyB6DTHrE78p8qSIWxul0Vd1nPL_fw6OgKs',
  authDomain: 'mvghazi-1fad7.firebaseapp.com',
  databaseURL: 'https://mvghazi-1fad7-default-rtdb.firebaseio.com',
  projectId: 'mvghazi-1fad7',
  storageBucket: 'mvghazi-1fad7.appspot.com',
  messagingSenderId: '81235332095',
  appId: '1:81235332095:web:697a1506fd04fd557035ca',
  measurementId: 'G-T5BDL182WK'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const listaClienteTest = [
  {
    'id': 0,
    'nombre': 'Jorgen Miguel',
    'apellido': 'Ghazi Marquett',
    'correo': 'ghazimjm@gmail.com',
    'telefono': 4241234567
  },
  {
    'id': 1,
    'nombre': 'Liah',
    'apellido': 'Suarez',
    'correo': 'liah.suarez@gmail.com',
    'telefono': 4247654321
  }
]

class ListaClientes extends React.Component {
  constructor(){
    super()
    this.state = {
      listaClientes : listaClienteTest
    }
  }

  render(){
    return <div><h1>Clientes:</h1>
      {this.state.listaClientes.map((item, i) => {
        return <div id={i} class='elementoCliente'>
        ID Cliente: {item.id}<br/>
        Nombre: {item.nombre}<br/>
        Apellido: {item.apellido}<br/>
        Correo: {item.correo}<br/>
        telefono: {item.telefono}
        </div>
      })}
    </div>
    }
  };

export default ListaClientes;
