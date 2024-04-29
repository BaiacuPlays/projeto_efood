import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;

  div {
    display: flex;
    align-items: center;
  }
`

export const BottomText = styled.h1`
  color: ${cores.textos};
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  width: 539px;
  height: 84px;
  gap: 0px;
  opacity: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
