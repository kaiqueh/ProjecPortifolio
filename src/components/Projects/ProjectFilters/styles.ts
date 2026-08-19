import styled from 'styled-components';

export const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 10px;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 9px 16px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? 'transparent' : theme.colors.borderStrong)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.surface)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fontWeights.medium : theme.fontWeights.regular};
  color: ${({ theme, $active }) => ($active ? theme.colors.onAccent : theme.colors.textTertiary)};
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme, $active }) => ($active ? 'transparent' : theme.colors.accent)};
  }
`;
