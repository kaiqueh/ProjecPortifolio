import styled from 'styled-components';

import { drift } from '../../../styles/animations';

export type GlowIntensity = 'soft' | 'medium' | 'strong';

export const StyledGlow = styled.div<{
  $intensity: GlowIntensity;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $width: string;
  $height: string;
  $duration: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background: radial-gradient(
    closest-side,
    ${({ theme, $intensity }) => theme.glow[$intensity]},
    transparent 72%
  );
  filter: blur(32px);
  animation: ${drift} ${({ $duration }) => $duration} ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;
