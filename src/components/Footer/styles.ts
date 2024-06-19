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
  text-align: center;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center; /* Adicionado para centralizar os links */
  margin-top: 16px;
  list-style: none; /* Adicionado para remover os marcadores da lista */
  padding: 0; /* Adicionado para remover padding da lista */
`

export const Link = styled.a`
  color: ${cores.branca}; /* Corrigido: aplicando a cor ao texto */
  text-decoration: none;
  margin-right: 8px;
  align-items: center;
  align-self: center;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column; /* Adicionado para alinhar itens em coluna */
  align-items: center; /* Adicionado para centralizar itens */
  text-align: center;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto 16px;
`

export const Redes = styled.img`
  display: block;
  margin: 16px auto 0;
  cursor: pointer;
`
