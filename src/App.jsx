import { useState } from 'react'
import TablaDeClientes from './components/TablaDeClientes'
import './css/app.css'
import FormularioAgregar from './components/FormularioAgregar'
import EditarForm from './components/EditarForm'
import Header from './components/Header'

const inicialClientes = [
  {cedula: 123456, nombre: 'Juan', apellido: 'Mena', profesion: 'Ingeniero'},
  {cedula: 654321, nombre: 'Catalina', apellido: 'Martinez', profesion: 'Estudante'},
  {cedula: 456789, nombre: 'Pedro', apellido: 'Gonzales', profesion: 'Comerciante'},
  {cedula: 987654, nombre: 'Carolina', apellido: 'Alzate', profesion: 'Ingeniera'}
]

const estadoInicial = {
  cedula: null, nombre:"", apellido:"", profesion:""
}

function App() {
  const [clientes, setClientes] = useState(inicialClientes);

  /* Saber si estamos editando o no */
  const [editando, setEditando] = useState(false);
  
  const [usuarioActual, setUsuarioActual] = useState(estadoInicial);

  /* Agregar cliente */
  const addClient= (cliente) => {
    setClientes([...clientes, cliente])
  }

  /* Eliminar Cliente */
  const eliminarCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.cedula !== id))
  }

  /* Editando */
  const editarRegistro = (cliente) => {
    setEditando(true)
  
    setUsuarioActual({ cedula: cliente.cedula, nombre: cliente.nombre, apellido: cliente.apellido, profesion: cliente.profesion })
  }

  const actualizarCliente = (id, clienteActualizado) => {
    setEditando(false)
    setClientes(clientes.map((cliente) => (cliente.cedula === id ? clienteActualizado : cliente)))
  }

  return (
    <>  
    <Header/>
    <div className="contenedor">
      <div className="flex-container">
          {editando?(
            <div className="flex-form">
              <EditarForm
                setEditando = {setEditando}
                usuarioActual = {usuarioActual}
                actualizarCliente = {actualizarCliente}
              />
            </div>
          ):(
            <div className='flex-form'>
              <FormularioAgregar
                addClient = {addClient}
              />
            </div>
          )}
        <div className="lista">
          <h2>Listado de Clientes</h2>
          <TablaDeClientes
            clientes = {clientes}
            eliminarCliente = {eliminarCliente}
            editarRegistro = {editarRegistro}
          /> 
        </div>
      </div>
    </div>
    </>
  )
}

export default App
