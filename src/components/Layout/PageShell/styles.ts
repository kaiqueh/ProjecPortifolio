import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const Page = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  overflow-x: clip;
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 96px;

  ${media.md} {
    padding-top: 84px;
  }
`;

/** Atalho para quem navega por teclado pular direto ao conteúdo. */
export const SkipLink = styled.a`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: ${({ theme }) => theme.zIndices.overlay};
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  font-size: ${({ theme }) => theme.fontSizes.small};
  transform: translateY(-200%);
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:focus-visible {
    transform: none;
  }
`;
