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
  left: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 20;
  transition: transform 0.3s ease-in-out;

  &.is-open {
    left: 0;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.textos};
  z-index: 21;
  padding: 20px 8px 0 8px;
  width: 360px;
  height: 100%;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  ${CartContainer}.is-open & {
    transform: translateX(0);
  }
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

export const CheckOutForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    margin-bottom: 16px;
    color: ${cores.footer};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-align: left;
  }
`

export const Input = styled.input`
  padding: 10px;
  border: ${cores.textos};
  width: 100%;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: left;

  background-color: ${cores.footer};
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: ${cores.footer};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: left;
`

export const FormRow = styled.div`
  display: flex;
  gap: 16px;

  div {
    flex: 1;
  }
`

export const EmptyCart = styled.p`
  color: ${cores.branca};
  align-items: center;
  text-align: center;
  padding-top: 20px;
`

export const LabelPrice = styled.span`
  color: ${cores.footer};
`
export const Final = styled.div`
  color: ${cores.branca};

  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-align: left;
    margin-bottom: 16px;
  }
  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;

    margin-bottom: 25px;
  }
`

export const AlertMessage = styled.div`
  background-color: ${cores.footer};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-top: 5px;

    background-color: ${cores.textos};
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s ease;
    width: 100%;

    &:hover {
      background-color: #c82333;
    }
  }
`
export const CheckOutFooter = styled.div`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
