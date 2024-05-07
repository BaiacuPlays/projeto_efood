import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 65.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.textos};
    text-decoration: none;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
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
  font-size: 18px;
`

export const LinkCart = styled.a`
  display: flex;
`

export const BottomText = styled.h1`
  color: ${cores.footer};
  font-size: 14px;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`
