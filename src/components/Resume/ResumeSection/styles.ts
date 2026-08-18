import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Sidebar = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const SidebarDesc = styled.p`
  margin: 2rem 0 2.5rem;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  width: 100%;
  height: 5.3rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 0.2rem solid ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.bgSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.white};
  font-weight: 500;
  margin-bottom: 2rem;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
`;

export const Content = styled.div``;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  text-align: left;
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  max-height: 45rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 1rem;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const SkillsGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  max-height: none;
`;
