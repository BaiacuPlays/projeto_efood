import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.fundo};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
  margin-bottom: 100px;
  color: ${cores.branca};
  width: 100%;
  max-width: 1200px;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  color: ${cores.textos};
  margin-bottom: 24px;
`
