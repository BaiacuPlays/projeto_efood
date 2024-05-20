import styled from 'styled-components'
import { cores } from '../../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  font-weight: bold;
  overflow: hidden;
  margin: 0 auto; /* Centraliza o banner na página */
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adiciona uma sobreposição escura */
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px; /* Define a largura máxima */
  margin: 0 auto; /* Centraliza o contêiner */
  position: relative; /* Necessário para o posicionamento absoluto dos textos */
  height: 100%; /* Garante que o contêiner interno ocupe toda a altura do banner */
  z-index: 1; /* Garante que o conteúdo fique acima da sobreposição */
`

export const TagHeader = styled.div`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  position: absolute;
  top: 20px;
  left: 0; /* Alinha à esquerda do contêiner */
  margin-left: 15px; /* Ajusta a posição para alinhar com o texto do header */
`

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  position: absolute;
  bottom: 20px;
  left: 0; /* Alinha à esquerda do contêiner */
  margin-left: 15px; /* Ajusta a posição para alinhar com o texto do header */
`
