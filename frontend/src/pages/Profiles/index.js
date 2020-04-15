import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'

export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  const ongID = localStorage.getItem('ongID');
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);


  function handelLogout() {
    localStorage.clear();
    history.push('/')
  }

  useEffect(() => {
    api.get('incidentlist', {
      headers: {
        authorization: ongID,
      }
    }).then(response => {
      setIncidents(response.data)
      // console.log(response.data)
      // console.log(ongID)
    })
  }, [ongID])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          authorization: ongID,
        }
      })
      setIncidents(incidents.filter(i => i.id !== id))
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente!')
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handelLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#e02041"  />
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}