import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import Contact from '../../components/Contact'
import * as S from '../../styles'

const ContactList = ({
  onResultChange
}: {
  onResultChange: (result: string) => void
}) => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let contactsFilter = itens
    if (term !== undefined) {
      contactsFilter = contactsFilter.filter(
        (item) =>
          item.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .search(
              term
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLocaleLowerCase()
            ) >= 0
      )
    }
    return contactsFilter
  }

  const displaysResultFiltering = (quantidade: number) => {
    return itens !== undefined && itens.length > 0
      ? `(${quantidade})`
      : `(value)`
  }

  const contacts = filterContacts()
  const mensagem = displaysResultFiltering(contacts.length)

  onResultChange(mensagem)

  return (
    <S.Aside home>
      <ul>
        {filterContacts().map((c) => (
          <li key={c.telephone}>
            <Contact
              name={c.name}
              telephone={c.telephone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </S.Aside>
  )
}

export default ContactList
