import React, { useState, useEffect } from 'react'

function EditContacts(props) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    buscarContact()
  }, [])


  const create = () => {
    if (!nome && !email && !telefone) return console.error('Campos obrigatórios!')
    
    const data = {
      nome,
      email,
      telefone
    }

    let url = 'http://localhost:3000/contacts'
    let metodo = 'POST'

    if(props.id){
        url = `${url}/${props.id}`
        metodo = 'PUT'
    }

    fetch(url, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  const buscarContact = () => {
    if(!props.id){
      return
    }

    fetch(`http://localhost:3000/contacts/${props.id}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      setNome(data.nome)
      setEmail(data.email)
      setTelefone(data.telefone)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <form onSubmit={() => create()}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)} />
        </label>

        <label>
          Email:
          <input 
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </label>

        <label>
          Telefone
          <input 
            type="texto"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  )


  
}

export default EditContacts;