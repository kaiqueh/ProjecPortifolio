import { useTranslation } from 'react-i18next';

import { portfolioData } from '../../../data/portfolio-data';
import { FooterEmail, FooterLinks, FooterName, FooterWrapper } from './styles';

/** Assinatura do portfólio: nome em escala editorial, e-mail e links. */
export function Footer() {
  const { t } = useTranslation();
  const { name, email, cvUrl, socialLinks } = portfolioData.personal;

  return (
    <FooterWrapper>
      <div>
        <FooterName>{name}</FooterName>
        <FooterEmail href={`mailto:${email}`}>{email}</FooterEmail>
      </div>

      <FooterLinks>
        {socialLinks.map((link) => (
          <li key={link.platform}>
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              {link.platform}
            </a>
          </li>
        ))}
        <li>
          <a href={cvUrl} download>
            {t('home.cv')}
          </a>
        </li>
      </FooterLinks>
    </FooterWrapper>
  );
}
