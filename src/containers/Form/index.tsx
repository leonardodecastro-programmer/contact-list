import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { MaskField } from '../../styles'

import { RootReducer } from '../../store'

import { ButtonsContainer } from '../../components/Contact/styles'
import { register, edit } from '../../store/reducers/contact'
import Contact from '../../models/Contact'
import * as S from '../../styles'
import { FormContainer, InputContainer } from './styles'

type Props = {
  formType: 'register' | 'edit'
}

const Form = ({ formType }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string | undefined }>()
  const contact = useSelector((state: RootReducer) =>
    id
      ? state.contacts.itens.find((contact) => contact.id === parseInt(id))
      : null
  )

  const [name, setName] = useState(contact?.name ?? '')
  const [telephone, setTelephone] = useState(contact?.telephone ?? '')
  const [email, setEmail] = useState(contact?.email ?? '')

  const registerContact = (e: FormEvent) => {
    e.preventDefault()
    const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
    if (!telefoneRegex.test(telephone)) {
      alert('Please enter a valid phone number')
      return
    }

    const addContact = new Contact(name, telephone, email, 9)

    dispatch(register(addContact))
    navigate('/')
  }

  const editContact = (evento: FormEvent) => {
    evento.preventDefault()

    const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
    if (!telefoneRegex.test(telephone)) {
      alert('Please enter a valid phone number')
      return
    }

    if (contact) {
      dispatch(
        edit({
          ...contact,
          name,
          telephone,
          email
        })
      )
    }
    navigate('/')
  }

  return (
    <S.Aside>
      <FormContainer
        onSubmit={formType === 'register' ? registerContact : editContact}
      >
        <S.MainText>
          {formType === 'register' ? 'Register' : 'Editing'}
        </S.MainText>
        <InputContainer>
          <div>
            <label htmlFor="text">Name</label>
            <S.Field
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tel">Telephone</label>
            <MaskField
              mask="(99) 99999-9999"
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <S.Field
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </InputContainer>
        <ButtonsContainer>
          <S.SaveButton type="submit">
            {formType === 'register' ? 'Register' : 'Confirm'}
          </S.SaveButton>
          <S.Button
            styleButton="edit"
            deleteOrCancel
            onClick={() => navigate('/')}
          >
            Cancel
          </S.Button>
        </ButtonsContainer>
      </FormContainer>
    </S.Aside>
  )
}

export default Form
