import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.textos};
  color: ${cores.footer};
  width: 121px;
  height: 26px;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  margin-right: 8px;
  display: inline-block;
  align-content: center;
  white-space: nowrap;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 2px;
    white-space: nowrap;
    display: inline-block;
  }
`
