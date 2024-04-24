import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../../styles'

export const Imagem = styled.div`
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

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  margin-top: 40px;
  font-size: 32px;
  max-width: 450px;
  color: ${cores.branca};
  font-weight: 900;
`

export const Preços = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

export const TagHeader = styled.div`
  color: ${cores.branca};
  margin-top: 30px;
  font-size: 32px;
  display: inline-block;
  font-weight: 100;
  max-width: 450px;
  margin-left: 40px;
`
