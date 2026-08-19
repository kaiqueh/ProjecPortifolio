import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 26px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  background: ${({ theme }) => theme.glass.backgroundStrong};
  backdrop-filter: ${({ theme }) => theme.glass.blurStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.blurStrong};
  box-shadow: ${({ theme }) => theme.glass.shadow};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const control = `
  padding: 14px 16px;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
`;

export const Input = styled.input<{ $invalid: boolean }>`
  ${control}
  border: 1px solid
    ${({ theme, $invalid }) => ($invalid ? theme.colors.accentDark : theme.colors.borderStrong)};
  background: rgba(10, 10, 10, 0.5);
  color: ${({ theme }) => theme.colors.text};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const TextArea = styled.textarea<{ $invalid: boolean }>`
  ${control}
  border: 1px solid
    ${({ theme, $invalid }) => ($invalid ? theme.colors.accentDark : theme.colors.borderStrong)};
  background: rgba(10, 10, 10, 0.5);
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FieldError = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.accentHover};
`;

export const Feedback = styled.p<{ $tone: 'success' | 'error' }>`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
  padding: 14px 18px;
  border: 1px solid
    ${({ theme, $tone }) =>
      $tone === 'success' ? theme.colors.accentBorder : 'rgba(206, 212, 218, 0.28)'};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme, $tone }) =>
    $tone === 'success' ? theme.colors.accentSurface : 'rgba(52, 58, 64, 0.5)'};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme, $tone }) =>
    $tone === 'success' ? theme.colors.accentHover : theme.colors.textTertiary};

  &::before {
    content: '';
    flex: none;
    width: 8px;
    height: 8px;
    border: ${({ theme, $tone }) =>
      $tone === 'success' ? 'none' : `2px solid ${theme.colors.textSecondary}`};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme, $tone }) => ($tone === 'success' ? theme.colors.accent : 'transparent')};
  }
`;
