import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../data/portfolio-data';
import { ContactInfo } from '../ContactInfo';
import { ContactForm } from '../ContactForm';
import * as S from './styles';

export function ContactSection() {
  const { t } = useTranslation();
  const { contact } = portfolioData;

  return (
    <S.Container>
      <S.InfoColumn>
        <h2>{t('contact.title')}</h2>
        <ContactInfo data={contact} />
      </S.InfoColumn>
      <div>
        <ContactForm />
      </div>
    </S.Container>
  );
}
