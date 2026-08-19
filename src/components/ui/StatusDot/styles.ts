import styled from 'styled-components';

import { blink } from '../../../styles/animations';

export const StyledStatusDot = styled.span<{ $size: string; $glow: boolean }>`
  flex: none;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme, $glow }) => ($glow ? `0 0 12px ${theme.colors.accent}` : 'none')};
  animation: ${blink} 2.6s ease-in-out infinite;
`;
