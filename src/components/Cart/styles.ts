import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.textos};
  z-index: 1;
  padding: 20px 8px 0 8px;
`

export const Valorpreco = styled.p`
  color: ${cores.footer};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  padding-top: 40px;

  span {
    padding-left: 214px;
  }
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${cores.footer};
  padding: 8px;
  margin-top: 16px;
  width: 344px;
  height: 100px;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    color: ${cores.textos};
    width: 140px;
    height: 21px;
    gap: 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    padding-left: 8px;
    padding-bottom: 45px;

    white-space: nowrap;
  }

  span {
    color: ${cores.textos};
    width: 67px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    padding-left: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-size: cover;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
