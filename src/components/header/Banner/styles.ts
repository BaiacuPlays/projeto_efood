import styled from 'styled-components'
import { cores } from '../../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  font-weight: bold;
  border: 1px solid black;
  overflow: hidden;
`

export const Titulo = styled.h2`
  position: absolute;
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  margin: 0;
  bottom: 20px;
  left: 400px;
`

export const TagHeader = styled.div`
  position: absolute;
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  margin: 0;
  top: 20px;
  left: 400px;
`
