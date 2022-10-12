import React from 'react'

const TablaDeClientes = ({clientes, eliminarCliente, editarRegistro}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Cédula</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Profesion</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    {clientes.length > 0 ? (
        clientes.map((cliente) => (
          <tr key={cliente.cedula}>
            <td>{cliente.cedula}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.profesion}</td>
            <td>
              <button 
                className=""
                onClick={() => {
                  editarRegistro(cliente)
                }}
              >Editar</button>

              <button 
                className=""
                onClick={() => eliminarCliente(cliente.cedula)}
              >Eliminar</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No hay Clientes</td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default TablaDeClientes