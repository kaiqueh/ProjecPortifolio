import { useTranslation } from 'react-i18next';

import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import { Address, CardWrapper, CopyButton, Label, Note } from './styles';

interface EmailCardProps {
  email: string;
  /** Observação sobre o e-mail ser um canal alternativo ao formulário. */
  note: string;
}

/** E-mail profissional, com ação de copiar e de iniciar uma mensagem. */
export function EmailCard({ email, note }: EmailCardProps) {
  const { t } = useTranslation();
  const { copied, copy } = useCopyToClipboard();

  return (
    <>
      <CardWrapper>
        <div>
          <Label>{t('contact.emailLabel')}</Label>
          <Address href={`mailto:${email}`}>{email}</Address>
        </div>

        <CopyButton
          type="button"
          aria-label={t('contact.copyEmail')}
          aria-live="polite"
          onClick={() => void copy(email)}
        >
          {copied ? t('contact.copied') : t('contact.copy')} ⧉
        </CopyButton>
      </CardWrapper>

      <Note>{note}</Note>
    </>
  );
}
