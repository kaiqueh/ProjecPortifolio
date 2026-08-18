import { useTranslation } from 'react-i18next';
import type { ContactInfo as ContactInfoType } from '../../../types';
import * as S from './styles';

interface ContactInfoProps {
  data: ContactInfoType;
}

export function ContactInfo({ data }: ContactInfoProps) {
  const { t } = useTranslation();

  return (
    <>
      <S.Container>
        <S.Icon className="bx bx-phone" />
        <S.Detail>
          <p>{t('contact.labels.phone')}</p>
          <p>{data.phone}</p>
        </S.Detail>
      </S.Container>
      <S.Container>
        <S.Icon className="bx bxs-envelope" />
        <S.Detail>
          <p>{t('contact.labels.email')}</p>
          <p>{data.email}</p>
        </S.Detail>
      </S.Container>
    </>
  );
}
