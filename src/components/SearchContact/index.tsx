import { useDispatch } from 'react-redux'

import { changeTerm } from '../../store/reducers/filter'
import * as S from '../../styles'
import { SearchContainer } from './styles'

const SearchContact = () => {
  const dispatch = useDispatch()
  return (
    <SearchContainer>
      <S.MainText>Search Contact</S.MainText>
      <S.Field
        placeholder="Contact name"
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />
    </SearchContainer>
  )
}

export default SearchContact
