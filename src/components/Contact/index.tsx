import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { remove } from '../../store/reducers/contact'
import ContactClass from '../../models/Contact'
import * as S from '../../styles'
import { ButtonsContainer, ContactContainer, InfosContainer } from './styles'

const Contact = ({ name, telephone, email, id }: ContactClass) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }

  function formatTelephoneNumber(telephone: string) {
    const formattedTelephone = telephone.match(/\d/g)?.join('')
    return formattedTelephone || telephone
  }

  return (
    <ContactContainer>
      <InfosContainer>
        <a href={`tel:${formatTelephoneNumber(telephone)}`}>
          <img src="person-circle.svg" />
        </a>
        <div>
          <h3>{name}</h3>
          <p>telephone: {telephone}</p>
          <p>e-mail: {email}</p>
        </div>
      </InfosContainer>
      <ButtonsContainer>
        <S.Button styleButton="edit" onClick={handleEdit}>
          Edit
        </S.Button>
        <S.Button
          styleButton="edit"
          deleteOrCancel
          onClick={() => dispatch(remove(id))}
        >
          Remove
        </S.Button>
      </ButtonsContainer>
    </ContactContainer>
  )
}

export default Contact
