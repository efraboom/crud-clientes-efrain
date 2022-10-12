import React from 'react'
import '../css/tablaClientes.css'
import Swal from 'sweetalert2'

const TablaDeClientes = ({clientes, eliminarCliente, editarRegistro}) => {
  return (
    <table className='main-table'>
      <thead className='table-head'>
        <tr className='table-tr'>
          <th className='column-th'>Cédula</th>
          <th className='column-th'>Nombre</th>
          <th className='column-th'>Apellido</th>
          <th className='column-th'>Profesión</th>
          <th className='column-th'>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <tr 
              className='registros'
              key={cliente.cedula}
            >
              <td>{cliente.cedula}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.profesion}</td>
              <td
                className='btn-grid'
              >
                <button 
                  className="btn-small btn-editar btn-content"
                  onClick={() => {
                    editarRegistro(cliente)
                  }}
                >Editar
                <i class='bx bx-edit' ></i>
                </button>

                <button 
                  className="btn-small btn-eliminar btn-content"
                  onClick={() => eliminarCliente(cliente.cedula)}
                >Eliminar
                <i class='bx bx-trash'></i>
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className='tr-vacio'>
            <td colSpan={5}>No hay Clientes</td>
          </tr>
        )}
      </tbody>
  </table>
  )
}

export default TablaDeClientes