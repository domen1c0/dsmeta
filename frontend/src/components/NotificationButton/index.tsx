import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'
import axios from 'axios'

type Props = {
  saleId: number
}


function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`).then(reponse => {
    console.log("sucesso")
  })
}

function NotificationButton({saleId} : Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton
