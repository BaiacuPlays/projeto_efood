import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.textos};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${cores.footer};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 20px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Titulo = styled.h3`
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 900;
  line-height: 1.2;
  text-align: left;
  color: ${cores.fundo};
  user-select: none;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${cores.branca};
  margin-bottom: 16px;
  user-select: none;
  text-decoration: none;
  margin-top: 5px;
`

export const ButtonButton = styled.button`
  color: ${cores.textos};
  background-color: ${cores.footer};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  border: none;

  align-self: stretch;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${cores.footer};
  }
`
