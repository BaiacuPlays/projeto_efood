import styled from 'styled-components'
import { cores } from '../../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  color: ${cores.branca};
  width: 676px;
  height: 33.25px;
  top: 376.75px;

  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  margin-top: 70px;
`

export const TagHeader = styled.div`
  position: absolute;
  color: ${cores.branca};
  width: 101px;
  height: 33.25px;
  top: 60px;
  left: 170px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
`
