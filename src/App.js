import React from 'react';
import './App.css';
import Header from './Componentes/Header'
import CreateContacts from './Componentes/CreateContacts'
import ListContacts from './Componentes/ListContacts'
//import EditContacts from './Componentes/teste'

function App() {
  return (
    <div>
      <Header/>
      <CreateContacts/>
      <ListContacts/>
    </div>
  );
}

export default App;
