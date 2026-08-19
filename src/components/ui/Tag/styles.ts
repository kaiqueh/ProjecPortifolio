import styled from 'styled-components';

export type TagSize = 'sm' | 'md';

export const StyledTag = styled.li<{ $size: TagSize }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${({ $size }) => ($size === 'sm' ? '5px 9px' : '8px 13px')};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surfaceHover};
  font-family: ${({ theme, $size }) => ($size === 'sm' ? theme.fonts.mono : theme.fonts.display)};
  font-size: ${({ theme, $size }) =>
    $size === 'sm' ? theme.fontSizes.label : theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const TagIcon = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  object-fit: contain;
`;

/** Espaço reservado do ícone quando a tecnologia ainda não tem imagem. */
export const TagIconPlaceholder = styled.span`
  width: 16px;
  height: 16px;
  border: 1px dashed ${({ theme }) => theme.colors.borderStrong};
  border-radius: 4px;
`;
