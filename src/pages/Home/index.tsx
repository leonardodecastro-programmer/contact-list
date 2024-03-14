import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchContact from '../../components/SearchContact'
import ContactList from '../../containers/ContactList'
import * as S from '../../styles'
import { TotalContacts } from './style'

const Home = () => {
  const navigate = useNavigate()
  const [result, setResult] = useState<string>('')

  const handleResultChange = (newResult: string) => {
    setResult(newResult)
  }

  return (
    <>
      <SearchContact />
      <ContactList onResultChange={handleResultChange} />
      <TotalContacts>
        Total contacts <span>{result}</span>
      </TotalContacts>
      <S.Button styleButton="add" onClick={() => navigate('/register')}>
        + Add contact
      </S.Button>
    </>
  )
}

export default Home
