import styled from 'styled-components';

export const ToggleGroup = styled.div<{ $variant: 'compact' | 'expanded' }>`
  display: flex;
  gap: ${({ $variant }) => ($variant === 'compact' ? '2px' : '8px')};
  padding: ${({ $variant }) => ($variant === 'compact' ? '5px 8px' : '0')};
  border: ${({ theme, $variant }) =>
    $variant === 'compact' ? `1px solid ${theme.colors.borderStrong}` : 'none'};
  border-radius: ${({ theme }) => theme.radii.pill};
`;

export const LanguageButton = styled.button<{ $active: boolean; $variant: 'compact' | 'expanded' }>`
  padding: ${({ $variant }) => ($variant === 'compact' ? '4px 6px' : '10px 18px')};
  border: ${({ theme, $variant, $active }) => {
    if ($variant !== 'expanded') return 'none';
    return `1px solid ${$active ? theme.colors.accent : theme.colors.borderStrong}`;
  }};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active, $variant }) => {
    if ($active) return $variant === 'compact' ? theme.colors.accent : theme.colors.surfaceHover;
    return 'transparent';
  }};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme, $variant }) =>
    $variant === 'compact' ? theme.fontSizes.label : theme.fontSizes.small};
  line-height: 1;
  color: ${({ theme, $active, $variant }) => {
    if (!$active) return theme.colors.textSecondary;
    return $variant === 'compact' ? theme.colors.onAccent : theme.colors.text;
  }};
  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme, $active }) => ($active ? undefined : theme.colors.text)};
  }
`;
