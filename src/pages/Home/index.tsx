import { useNavigate } from 'react-router-dom'
import SearchContact from '../../components/SearchContact'
import ContactList from '../../containers/ContactList'
import { Button } from '../../styles'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <SearchContact />
      <ContactList />
      <Button styleButton="add" onClick={() => navigate('/register')}>
        + Add contact
      </Button>
    </>
  )
}

export default Home
