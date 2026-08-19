import { useTranslation } from 'react-i18next';

import { portfolioData } from '../../../data/portfolio-data';
import { useLocale } from '../../../hooks/useLocale';
import { Button } from '../../ui/Button';
import { GlowBackdrop } from '../../ui/GlowBackdrop';
import { StatusDot } from '../../ui/StatusDot';
import {
  Actions,
  HeroBar,
  HeroContent,
  HeroSection,
  Name,
  Role,
  ScrollHint,
  StatusDivider,
  StatusLine,
  Summary,
  TopSheen,
} from './styles';

/** Primeira impressão da Home: identificação, apresentação e acessos diretos. */
export function Hero() {
  const { t } = useTranslation();
  const { localize } = useLocale();
  const { name, role, availability, summary, cvUrl, socialLinks } = portfolioData.personal;

  return (
    <HeroSection>
      <GlowBackdrop
        intensity="strong"
        right="-6%"
        bottom="-30%"
        width="58%"
        height="80%"
        duration="19s"
      />
      <TopSheen aria-hidden="true" />

      <HeroContent>
        <StatusLine>
          <StatusDot />
          <Role>{localize(role)}</Role>
          <StatusDivider aria-hidden="true" />
          <span>{localize(availability)}</span>
        </StatusLine>

        <Name>{name}</Name>
        <Summary>{localize(summary)}</Summary>

        <Actions>
          <Button as="a" href={cvUrl} download>
            {t('home.cv')}
          </Button>
          {socialLinks.map((link) => (
            <Button
              key={link.platform}
              as="a"
              variant="underline"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.platform} ↗
            </Button>
          ))}
        </Actions>
      </HeroContent>

      <HeroBar>
        <span>{t('sections.home')}</span>
        <ScrollHint>
          <span>{t('home.scroll')}</span>
          <span aria-hidden="true">↓</span>
        </ScrollHint>
      </HeroBar>
    </HeroSection>
  );
}
