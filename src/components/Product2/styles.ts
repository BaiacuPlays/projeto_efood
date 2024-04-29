import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  color: ${cores.textos};
`

export const Titulo = styled.h3`
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
  justify-content: space-between;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 12px;
`

export const Estrela = styled.img`
  max-width: 21px;
  max-height: 21px;
  float: right;
  margin-right: 10px;
  vertical-align: middle;
`

export const ButtonButton = styled.button`
  color: ${cores.branca};
  background-color: ${cores.textos};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 32px;
  padding: 0 8px;
`
