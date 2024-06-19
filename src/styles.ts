import { createGlobalStyle } from 'styled-components'
import fundo from '../src/assets/images/fundo.png'

export const cores = {
  branca: '#FFFF',
  fundo: '#FFF8F2',
  textos: '#E66767',
  footer: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '640px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.textos};
    padding-top: 40px;
    background-image: url(${fundo});
    background-position: center;


  }

  .container {
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}){
  max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}){
  max-width: 80%;
  }
  }
`
