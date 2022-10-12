import {useState} from 'react'
import '../css/app.css'

const FormularioAgregar = ({addClient}) => {

    const valoresIniciales = {
        cedula: null,
        nombre: '',
        apellido: '',
        profesion: '',
    }
    const [cliente, setCliente] = useState(valoresIniciales);

    const handleChange = (e) => {
        
        setCliente({ 
            ...cliente,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <form
                className='formulario'
                onSubmit={event => {
                    event.preventDefault()
                    if (!cliente.cedula || !cliente.nombre || !cliente.apellido || !cliente.profesion){
                        alert('Todos los campos son obligatorios')
                        return
                    }
                    addClient(cliente)
                    setCliente(valoresIniciales)
                }}
            >
                <h2>Agregar cliente</h2>
                <label htmlFor='cedula'>Cédula</label><br />
                <input className='input' onChange={handleChange} type="number" name="cedula" id='cedula' value={cliente.cedula} placeholder='Nº de Cédula' /><br />

                <label htmlFor="nombre">Nombre</label><br />
                <input className='input' onChange={handleChange} type="text" name="nombre" id="nombre" value={cliente.nombre} placeholder='Nombre' /><br />

                <label htmlFor="apellido">Apellido</label><br />
                <input className='input' onChange={handleChange} type="text" name="apellido" id="apellido" value={cliente.apellido} placeholder='Apellido'/><br />

                <label htmlFor="profesion">Profesion</label><br />
                <input className='input' onChange={handleChange} type="text" name="profesion" id="profesion" value={cliente.profesion} placeholder='Profesión'/><br />

                <button
                    type="submit"
                    className='btn'
                >Agregar cliente</button>
            </form>
        </div>
  )
}

export default FormularioAgregar