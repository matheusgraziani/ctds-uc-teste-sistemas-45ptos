// src/components/CadastroGeral.jsx

import React, { useState } from 'react';

const CadastroGeral = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome && !email.includes('@') ) {
      setMensagem('Preencha corretamente os campos ');
      return;
    }
    if (!nome !== "" ) {
        setMensagem('Preencha corretamente os campos ');
        return;
      }
    if (senha.length < 6) {
        setMensagem('Preencha corretamente os campos ');
        return;
      }
    setMensagem('Cadastro realizado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder=""
            
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
           
            
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroGeral