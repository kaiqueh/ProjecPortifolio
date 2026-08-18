import type { SocialLink } from '../../../types';
import * as S from './styles';

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <S.Container>
      {links.map((link) => (
        <S.Link
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`bx ${link.icon}`} />
        </S.Link>
      ))}
    </S.Container>
  );
}
