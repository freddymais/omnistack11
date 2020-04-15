import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, steCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory();

  async function inserirRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    console.log(data)
    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso é: ${response.data.id}`);
      history.push('/');
    } catch {
      alert('Erro ao cadastrar ONG.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
              Nao tenho cadastro.
          </Link>

        </section>
        <form onSubmit={inserirRegister}>
          <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

          <div className="input-group">
            <input placeholder="Cidade" value={city} onChange={e => steCity(e.target.value)} />
            <input placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );

}