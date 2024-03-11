import styled, { createGlobalStyle } from 'styled-components'

import variables from './variables'

type Props = {
  styleButton: 'add' | 'edit'
  deleteOrCancel?: boolean
  cofirm?: boolean
}

type Home = {
  home?: boolean
}

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${variables.base};
`

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
`

export const Aside = styled.div<Home>`
  margin: 40px 0;
  height: 100%;
  width: 100%;
  overflow-y: ${(props) => (props.home ? 'scroll' : 'none')};
  border-top: solid 1px ${variables.darkGrey};
  border-bottom: solid 1px ${variables.darkGrey};
`

export const Button = styled.button<Props>`
  height: fit-content;
  background-color: transparent;
  padding: ${(props) =>
    props.styleButton === 'add' ? '10px 18px' : '5px 13px'};
  font-size: ${(props) => (props.styleButton === 'add' ? '24px' : '16px')};
  border-radius: 8px;
  border: solid 2px ${variables.darkGrey};
  color: ${(props) =>
    props.deleteOrCancel ? variables.delete : variables.primary};
  cursor: pointer;
`

export const SaveButton = styled.button`
  height: fit-content;
  background-color: transparent;
  padding: 5px 13px;
  font-size: 16px;
  border-radius: 8px;
  border: solid 2px ${variables.darkGrey};
  color: ${variables.green};
  cursor: pointer;
`

export const Field = styled.input`
  width: 600px;
  border-radius: 40px;
  padding: 10px 12px;
  color: #ffff;
  border: solid 2px ${variables.grey};
  background-color: ${variables.darkGrey};
`

export default EstiloGlobal
