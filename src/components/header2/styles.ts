import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`
export const LogoContainer = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomText = styled.h1`
  color: ${cores.textos};
  margin-top: 20px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  width: 539px;
  height: 84px;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    line-height: 30px;
    width: 90%;
    align-items: center;
    padding: 0 0 100px 30px;
  }
`
