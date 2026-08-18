import styled from 'styled-components';

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 2.5rem 3.5rem 3.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxxs}) {
    padding: 2.5rem 3rem 3.5rem;
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

export const FieldBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 0.15rem solid ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 0.15rem solid ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  grid-column: 1 / -1;
  height: 26rem;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.bg};
  font-weight: 500;
  margin-top: 2rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
  }
`;
