import styled from 'styled-components'
import { cores } from '../../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.textos};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  width: 140px;
  height: 26px;
  top: 460px;
  left: 437px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
`
