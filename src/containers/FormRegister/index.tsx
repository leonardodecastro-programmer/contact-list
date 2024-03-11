import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { ButtonsContainer } from '../../components/Contact/styles'
import { Aside, Button, SaveButton, Field } from '../../styles'
import { Form, InputContainer } from '../FormEdit/styles'

import { register } from '../../store/reducers/contact'

const FormRegister = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')

  const registerContact = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      register({
        name,
        telephone,
        email
      })
    )
    navigate('/')
  }

  return (
    <Aside>
      <Form onSubmit={registerContact}>
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
          <SaveButton type="submit">Register</SaveButton>
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

export default FormRegister
