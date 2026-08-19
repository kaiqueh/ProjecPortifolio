import { useLocale } from '../../../hooks/useLocale';
import type { SocialLink } from '../../../types';
import { CardGrid, SocialCard, SocialName, SocialPurpose } from './styles';

interface SocialCardsProps {
  links: SocialLink[];
  label: string;
}

/** Redes profissionais, cada uma com a sua finalidade declarada. */
export function SocialCards({ links, label }: SocialCardsProps) {
  const { localize } = useLocale();

  return (
    <CardGrid aria-label={label}>
      {links.map((link) => (
        <li key={link.platform}>
          <SocialCard href={link.url} target="_blank" rel="noreferrer noopener">
            <SocialName>{link.platform} ↗</SocialName>
            <SocialPurpose>{localize(link.purpose)}</SocialPurpose>
          </SocialCard>
        </li>
      ))}
    </CardGrid>
  );
}
