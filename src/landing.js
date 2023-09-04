import React, { useState } from 'react';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [pais, setPais] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleCreatePasswordClick = () => {
   
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="edad">Edad:</label>
        <input
          type="text"
          id="edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <label htmlFor="pais">País:</label>
        <input
          type="text"
          id="pais"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button type="button" onClick={handleCreatePasswordClick}>
          Crear Contraseña
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
