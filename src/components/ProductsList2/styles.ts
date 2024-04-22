import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'locais'>>`
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
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
`
