import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 65.5px;
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  background-color: ${cores.footer};

  a {
    color: ${cores.textos};
    text-decoration: none;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`

export const Links = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const LinkItem = styled.li`
  font-size: 18px;
`

export const LinkCart = styled.a`
  display: flex;
  margin-left: 20px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`
