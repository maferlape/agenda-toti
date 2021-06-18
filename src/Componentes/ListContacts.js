import React, { useEffect, useState} from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import EditContacts from './teste'

function ListContacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getContacts()
  }, [contacts.length])

  const getContacts = () => {
    fetch('http://localhost:3000/contacts', {
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
      console.log('Deletado com sucesso', data);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }


  return (
        <div>
          <ul>
            {contacts.map((contact) => {
              return <li key={contact.id}>
                {contact.nome}-
                {contact.email}-
                {contact.telefone}-
                <button >Editar</button>
                {/* <link to="/test">Editar</link> */}
                <button onClick={() => deleteContact(contact.id)} >Deletar</button>
              </li>
            })}
          </ul>

         
        </div>
  )
}

export default ListContacts;