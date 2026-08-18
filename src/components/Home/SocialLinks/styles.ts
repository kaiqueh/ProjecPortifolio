import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 2rem;
`;

export const Link = styled.a`
  display: inline-flex;
  padding: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.circle};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0.8rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primary};
  }
`;
