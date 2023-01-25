import icon from '../../assets/img/delete.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import React from 'react'

type Props = {
  saleId: number
}

function handleClick(id: number) {
  axios.delete(`${BASE_URL}/sales/${id}`).then(reponse => {
    toast.info('DELETADO COM SUCESSO!')
  })
 
}

function DeleteButton({ saleId }: Props) {
  return (
    <div className="dsmeta-delete-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Delete" />
    </div>
  )
}

export default DeleteButton