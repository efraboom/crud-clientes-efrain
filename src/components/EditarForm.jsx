import React, { useState, useEffect } from 'react'
import '../css/app.css'


const EditarForm = (props) => {
    const [cliente, setCliente] = useState(props.usuarioActual)

    useEffect(() => {
        setCliente(props.usuarioActual)
      }, [props])
  
    const handleChange = (e) => {
        const { name, value } = e.target

        setCliente({ ...cliente, [name]: value })
    }
    return (
        <form
            className='formulario'
            onSubmit={(e) => {
                e.preventDefault()
                props.actualizarCliente(cliente.cedula, cliente)
            }}
        >
            <h2>Actualizar cliente</h2>
            <label htmlFor='cedula'>Cédula</label><br />
            <input className='input' onChange={handleChange} type="number" name="cedula" id='cedula' value={cliente.cedula} placeholder='Cédula' /><br />

            <label htmlFor="nombre">Nombre</label><br />
            <input className='input' onChange={handleChange} type="text" name="nombre" id="nombre" value={cliente.nombre} placeholder='Nombre' /><br />

            <label htmlFor="apellido">Apellido</label><br />
            <input className='input' onChange={handleChange} type="text" name="apellido" id="apellido" value={cliente.apellido} placeholder='Apellido'/><br />

            <label htmlFor="profesion">Profesion</label><br />
            <input className='input' onChange={handleChange} type="text" name="profesion" id="profesion" value={cliente.profesion} placeholder='Profesión'/><br />

            <div className='actualizar-botones'>
                <button
                    className='btn-update btn-confirmar'
                    type="submit"
                >Actualizar</button>
                <button
                    className='btn-update btn-cancelar'
                    onClick={() => props.setEditando(false)}
                >Cancelar</button>
                
            </div>
        </form>
    )
}

export default EditarForm