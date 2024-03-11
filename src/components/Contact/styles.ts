import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactContainer = styled.div`
  padding: 19px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: solid 1px ${variables.darkGrey};
  }
`

export const InfosContainer = styled.div`
  display: flex;

  img {
    width: 62px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 8px;
    gap: 8px;

    h3 {
      color: ${variables.default};
    }

    p {
      color: ${variables.grey};
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`
