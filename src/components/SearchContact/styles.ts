import styled from 'styled-components'
import variables from '../../styles/variables'

export const SearchContainer = styled.div`
  p {
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    color: ${variables.grey};
  }

  input {
    width: 600px;
    border-radius: 40px;
    padding: 10px 12px;
    color: #ffff;
    border: solid 2px ${variables.grey};
    background-color: ${variables.darkGrey};
  }
`
