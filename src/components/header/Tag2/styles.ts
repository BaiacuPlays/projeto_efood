import styled from 'styled-components'
import { cores } from '../../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.textos};
  width: 121px;
  height: 26px;
  top: 456px;
  left: 437px;
  color: ${cores.footer};
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  align-content: center;
`
