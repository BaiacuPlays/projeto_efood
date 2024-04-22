import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.footer};
  padding: 32px 0;
  font-size: 14px;

  p {
    text-align: center;
  }
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  ${cores.branca};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto 16px;
`

export const Redes = styled.img`
  display: block;
  margin: 16px auto 0;
`
