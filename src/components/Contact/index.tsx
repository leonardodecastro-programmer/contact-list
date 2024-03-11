import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Button } from '../../styles'
import { ButtonsContainer, ContactContainer, InfosContainer } from './styles'
import { remove } from '../../store/reducers/contact'
import ContactClass from '../../models/Contact'

type Props = ContactClass

const Contact = ({ name, telephone, email, id }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }
  return (
    <ContactContainer>
      <InfosContainer>
        <img src="person-circle.svg" />
        <div>
          <h3>{name}</h3>
          <p>telephone: {telephone}</p>
          <p>e-mail: {email}</p>
        </div>
      </InfosContainer>
      <ButtonsContainer>
        <Button styleButton="edit" onClick={handleEdit}>
          Editar
        </Button>
        <Button
          styleButton="edit"
          deleteOrCancel
          onClick={() => dispatch(remove(id))}
        >
          Remover
        </Button>
      </ButtonsContainer>
    </ContactContainer>
  )
}

export default Contact
