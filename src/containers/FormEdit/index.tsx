import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ButtonsContainer } from '../../components/Contact/styles'
import { Aside, Button, SaveButton, Field } from '../../styles'
import { Form, InputContainer } from './styles'
import { edit } from '../../store/reducers/contact'
import { RootReducer } from '../../store'

const FormEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string | undefined }>() // Obter o ID do contato da URL como uma string ou undefined
  const contato = useSelector((state: RootReducer) =>
    id
      ? state.contacts.itens.find((contato) => contato.id === parseInt(id))
      : null
  )

  const [name, setName] = useState(contato?.name ?? '')
  const [telephone, setTelephone] = useState(contato?.telephone ?? '')
  const [email, setEmail] = useState(contato?.email ?? '')

  const editContact = (evento: FormEvent) => {
    evento.preventDefault()

    if (contato) {
      dispatch(
        edit({
          ...contato,
          name,
          telephone,
          email
        })
      )
    }
    navigate('/')
  }

  return (
    <Aside>
      <Form onSubmit={editContact}>
        <InputContainer>
          <div>
            <Field
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Field
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <Field
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </InputContainer>
        <ButtonsContainer>
          <SaveButton type="submit">Confirm</SaveButton>
          <Button
            styleButton="edit"
            deleteOrCancel
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </ButtonsContainer>
      </Form>
    </Aside>
  )
}

export default FormEdit
