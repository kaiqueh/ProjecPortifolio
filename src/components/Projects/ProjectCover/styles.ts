import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const CoverWrapper = styled.div<{ $height: string; $horizontal: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: ${({ $horizontal }) => ($horizontal ? '170px' : '100%')};
  height: ${({ $horizontal, $height }) => ($horizontal ? 'auto' : $height)};
  border-right: ${({ theme, $horizontal }) =>
    $horizontal ? `1px solid ${theme.colors.border}` : 'none'};
  border-bottom: ${({ theme, $horizontal }) =>
    $horizontal ? 'none' : `1px solid ${theme.colors.border}`};
  background: repeating-linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.035) 0 14px,
    transparent 14px 28px
  );
  overflow: hidden;

  ${media.sm} {
    width: 100%;
    height: ${({ $height }) => $height};
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CoverPlaceholder = styled.span`
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSubtle};
`;
