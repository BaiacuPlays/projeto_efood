import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid #e66767;
  background-color: ${cores.branca};
  display: flex;
  flex-direction: column;
  color: ${cores.textos};
  position: relative;
  overflow: hidden;
  margin: 20px;

  img {
    width: 472px;
    height: 217px;
    gap: 0px;
    opacity: 0px;
  }
`

export const Titulo = styled.h3`
  line-height: 18.75px;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
  white-space: nowrap;
  align-items: center;
  width: calc(100% - 20px);
  margin: 5px 10px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 12px;
  width: calc(100% - 20px);
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
  padding: 0 8px;
  white-space: nowrap;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  margin-left: 10px;
  margin-bottom: 10px;
`
