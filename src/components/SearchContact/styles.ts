import styled from 'styled-components'
import variables from '../../styles/variables'

export const SearchContainer = styled.div`
  h2 {
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    color: ${variables.grey};
  }

  input {
    width: 100%;
    border-radius: 40px;
    padding: 10px 12px;
    color: #ffff;
    border: solid 2px ${variables.grey};
    background-color: ${variables.darkGrey};
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`
