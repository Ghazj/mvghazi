import './customerCard.css'

function CustomersCard(props) {
    return (
        <div className='customerCard'>
            ID Cliente: {props.id}<br />
            Nombre: {props.nombre}<br />
            Apellido: {props.apellido}<br />
            Documento: {props.documento}<br />
            Correo: {props.correo}<br />
            telefono: {props.telefono}
        </div>
    );
}

export default CustomersCard;