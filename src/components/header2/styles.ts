import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.textos};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
`

export const BottomText = styled.h1`
  color: ${cores.branca};
  font-size: 14px; /* Reduzindo o tamanho da fonte para evitar ocupar muito espaço */
  margin-top: 20px; /* Espaçamento superior para criar espaço entre o texto e os elementos acima */
  width: 100%; /* Garantindo que o texto ocupe a largura total */
  text-align: center; /* Centralizando o texto horizontalmente */
`
