import styled from 'styled-components';

export const CredentialItem = styled.li`
  padding: 18px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CredentialTitle = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const CredentialMeta = styled.p`
  margin-top: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textMuted};
`;
