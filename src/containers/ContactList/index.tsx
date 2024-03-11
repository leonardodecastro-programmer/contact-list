import { useSelector } from 'react-redux'

import Contact from '../../components/Contact'
import { Aside } from '../../styles'
import { TotalContacts } from './style'

import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  return (
    <Aside home>
      <ul>
        {itens.map((c) => (
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
    </Aside>
  )
}

export default ContactList
