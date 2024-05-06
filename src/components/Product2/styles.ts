import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid;
  border: Mixed solid #e66767;
  background-color: ${cores.branca};
  display: flex;
  flex-direction: column;
  color: ${cores.textos};
  width: 472px;
  height: 398px;
  top: 440px;
  left: 171px;
`

export const Titulo = styled.h3`
  line-height: 18.75px;
  justify-content: space-between;
  width: 92px;
  height: 21px;
  top: 665px;
  left: 178px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
  white-space: nowrap;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  margin-top: 5px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 12px;
  width: 456px;
  height: 88px;
  top: 702px;
  left: 179px;
  gap: 0px;
  opacity: 0px;
  margin-left: 10px;
`

export const Estrela = styled.img`
  max-width: 21px;
  max-height: 21px;
  float: right;
  margin-right: 13px;
`

export const ButtonButton = styled.button`
  color: ${cores.footer};
  background-color: ${cores.textos};
  cursor: pointer;
  border: none;
  width: 82px;
  height: 24px;
  top: 806px;
  left: 179px;
  padding: 0 8px;
  white-space: nowrap;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  margin-left: 10px;
`
