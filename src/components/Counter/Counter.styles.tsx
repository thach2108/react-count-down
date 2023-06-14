import styled from 'styled-components'
import { EAnimationType } from './Counter.types'

export const ViewerStyle = styled.span<{ animationType: EAnimationType }>`
  position: absolute;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(p) => p.color};
  transform: ${(p) =>
    p.animationType === EAnimationType.CIRCLE ? 'rotate(45deg)' : 'none'};
`
