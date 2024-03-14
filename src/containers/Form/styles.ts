import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormContainer = styled.form`
  max-height: 612px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: ${variables.grey};
    margin-bottom: 12px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 0;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      width: 600px;
    }

    label {
      font-size: 16px;
      font-weight: bold;
      color: ${variables.grey};
      margin-bottom: 20px;
    }
  }
`
