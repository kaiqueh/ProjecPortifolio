import { useTranslation } from 'react-i18next';

import { ContactForm } from '../../components/Contact/ContactForm';
import { ContactMeta } from '../../components/Contact/ContactMeta';
import { EmailCard } from '../../components/Contact/EmailCard';
import { SocialCards } from '../../components/Contact/SocialCards';
import { PageShell } from '../../components/Layout/PageShell';
import { GlowBackdrop } from '../../components/ui/GlowBackdrop';
import { SectionLabel } from '../../components/ui/SectionLabel';
import { portfolioData } from '../../data/portfolio-data';
import { useLocale } from '../../hooks/useLocale';
import { ContactLayout, FormColumn, Intro, IntroColumn, Title } from './styles';

/** Canais de contato e o formulário para iniciar uma conversa. */
export function Contact() {
  const { t } = useTranslation();
  const { localize } = useLocale();
  const { personal, contact } = portfolioData;

  return (
    <PageShell showFooter={false}>
      <ContactLayout>
        <GlowBackdrop
          intensity="strong"
          left="-6%"
          bottom="-40%"
          width="56%"
          height="110%"
          duration="20s"
        />

        <IntroColumn>
          <SectionLabel tone="accent">{t('sections.contact')}</SectionLabel>
          <Title>{t('nav.contact')}</Title>
          <Intro>{localize(contact.intro)}</Intro>

          <EmailCard email={personal.email} note={localize(contact.emailNote)} />
          <SocialCards links={personal.socialLinks} label={t('contact.networks')} />
          <ContactMeta
            availability={localize(contact.availability)}
            privacy={localize(contact.privacy)}
          />
        </IntroColumn>

        <FormColumn>
          <ContactForm />
        </FormColumn>
      </ContactLayout>
    </PageShell>
  );
}
