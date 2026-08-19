import { useTranslation } from 'react-i18next';

import { MetaGrid, MetaLabel, MetaValue } from './styles';

interface ContactMetaProps {
  availability: string;
  privacy: string;
}

/** Disponibilidade profissional e uso dos dados enviados pelo formulário. */
export function ContactMeta({ availability, privacy }: ContactMetaProps) {
  const { t } = useTranslation();

  return (
    <MetaGrid>
      <div>
        <MetaLabel>{t('contact.availability')}</MetaLabel>
        <MetaValue>{availability}</MetaValue>
      </div>
      <div>
        <MetaLabel>{t('contact.privacy')}</MetaLabel>
        <MetaValue>{privacy}</MetaValue>
      </div>
    </MetaGrid>
  );
}
