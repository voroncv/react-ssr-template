import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
		box-sizing: border-box;
  }
`

export default GlobalStyle;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (max-width: 576px) {
    padding: 0 15px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1600px) {
    max-width: 1280px;
  }
`

