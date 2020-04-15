import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
import './styles.css'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongID = localStorage.getItem('ongID')
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };
    // console.log(data)

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongID,
        }
      })
      // alert('Novo caso incluido na ONG: ' + response.data.id + ' com sucesso!')
      history.push('/profiles')
      // console.log(response)
    } catch (error) {
      alert('Erro ao cadastrar caso. Tente novamente.')
    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva detalhadamente para encontrar um heroi para resolver isso.</p>
          <Link className="back-link" to="/profiles">
            <FiArrowLeft size={16} color="#e02041" />
              Voltar para Casos
          </Link>

        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Nome do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}