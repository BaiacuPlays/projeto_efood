import styled from 'styled-components'
import { cores } from '../../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  font-weight: bold;
  overflow: hidden;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  height: 100%;
`

export const TagHeader = styled.div`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: 15px;
`

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  position: absolute;
  bottom: 20px;
  left: 0;
  margin-left: 15px;
`
