import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 3rem 2.5rem;
  height: calc((45rem - 2rem) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Institution = styled.p`
  position: relative;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.circle};
    padding: 0.5rem;
    transform: translateY(-50%);
    margin-left: -2rem;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
