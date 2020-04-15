import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState('');
  

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      console.log(response.data.name);
      localStorage.setItem('ongID', id)
      localStorage.setItem('ongName', response.data.name)
      history.push('/profiles')

    } catch (err) {
      alert('Falha no Login. Tente novamente!');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
          Nao tenho cadastro
        </Link>

        </form>

      </section>
      <img src={heroesImg} alt="Heroes" />


    </div>
  )
}