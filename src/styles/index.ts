import styled, { createGlobalStyle } from 'styled-components'
import InputMask from 'react-input-mask'

import variables from './variables'

type ButtonType = {
  styleButton: 'add' | 'edit'
  deleteOrCancel?: boolean
  cofirm?: boolean
}

type HomeType = {
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
  height: 100%;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
`

export const Aside = styled.div<HomeType>`
  margin: ${(props) => (props.home ? '24px 0' : 'auto')};
  height: ${(props) => (props.home ? '100%' : '612px')};
  width: 100%;
  overflow-y: ${(props) => (props.home ? 'scroll' : 'none')};
  border: ${(props) => (props.home ? '' : `solid 1px ${variables.darkGrey}`)};
  border-radius: ${(props) => (props.home ? '' : '8px')};
  border-top: ${(props) =>
    props.home ? `solid 1px ${variables.darkGrey}` : ''};
  border-bottom: ${(props) =>
    props.home ? `solid 1px ${variables.darkGrey}` : ''};

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    border: solid 2px ${variables.darkGrey};
    height: 10px;
    width: 6px;
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`

export const MainText = styled.h2`
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  color: ${variables.grey};
`

export const Button = styled.button<ButtonType>`
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
  width: 100%;
  border-radius: 40px;
  padding: 10px 12px;
  color: #ffff;
  border: solid 2px ${variables.grey};
  background-color: ${variables.darkGrey};

  @media (min-width: 768px) {
    width: 600px;
  }
`

export const MaskField = styled(InputMask)`
  width: 100%;
  border-radius: 40px;
  padding: 10px 12px;
  color: #ffff;
  border: solid 2px ${variables.grey};
  background-color: ${variables.darkGrey};

  @media (min-width: 768px) {
    width: 600px;
  }
`

export default EstiloGlobal
