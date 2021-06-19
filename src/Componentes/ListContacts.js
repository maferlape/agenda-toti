import React, { useEffect, useState} from 'react'
import EditContacts from './EditContacts'

function ListContacts() {
  const [contacts, setContacts] = useState([])
  const [idDelete, setidDelete ] = useState(0)
  const [idEdit, setidEdit] = useState(0)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getContacts()
  }, [contacts.length, idDelete, idEdit, search])

  let url='http://localhost:3000/contacts'

  const getContacts = () => {
    const endpoint = Boolean(search) ? `${url}?q=${search}` : url 
    fetch(endpoint, {
      method: 'GET'
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      setContacts(data)
    })
  }

  const deleteContact = (id) => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'DELETE'
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      setidDelete(id)
      console.log('Deletado com sucesso', data);
    })
    .catch(function (error) {
      console.log(error);
    });  
  } 

  const inputSearch = (<>
                        <label>Buscar Contacto</label>
                        <input type="search" name="" id="" 
                        onChange={(event) => setSearch(event.target.value)} />
                      </>
    )

  return (
        <div>
          {inputSearch}

          <EditContacts id={idEdit} />

          <ul>
            {contacts.map((contact) => {
              return <li key={contact.id}>
                {contact.nome}-
                {contact.email}-
                {contact.telefone}-
                <button onClick={()=>{setidEdit(contact.id)}} >Editar</button>
                <button onClick={() => deleteContact(contact.id)} >Deletar</button>
              </li>
            })}
          </ul>
         
        </div>
  )
}

export default ListContacts;