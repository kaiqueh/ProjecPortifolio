import styled from 'styled-components';

export const StyledSectionLabel = styled.h2<{ $tone: 'muted' | 'accent' }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.8;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
  color: ${({ theme, $tone }) =>
    $tone === 'accent' ? theme.colors.accent : theme.colors.textSubtle};
`;
