import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.fundo};
  overflow: hidden;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 24px;
  column-gap: 24px;
  margin-top: 40px;
  color: ${cores.branca};
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 0 2px 0 2px;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
`
