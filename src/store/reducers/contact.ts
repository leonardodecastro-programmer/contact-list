import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.itens[index] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const taskAlreadyExists = state.itens.find(
        (contact) => contact.telephone === action.payload.telephone
      )

      if (taskAlreadyExists) {
        alert('A contact with that telephone already exists')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactsSlice.actions

export default contactsSlice.reducer
