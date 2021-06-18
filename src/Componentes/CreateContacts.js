import React, { useState } from 'react'

function CreateContacts() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')


  const create = () => {
    if (!nome && !email && !telefone) return console.error('Campos obrigatórios!')
    
    const data = {
      nome,
      email,
      telefone
    }

    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
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

export default CreateContacts;