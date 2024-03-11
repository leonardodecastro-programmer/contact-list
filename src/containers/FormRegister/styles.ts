import styled from 'styled-components'

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 240px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
  }
`
