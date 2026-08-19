import { useLocale } from '../../../hooks/useLocale';
import type { Certification, Education } from '../../../types';
import { CredentialItem, CredentialMeta, CredentialTitle } from './styles';

interface CredentialListProps {
  /** Formação acadêmica ou certificações — ambas seguem o mesmo formato. */
  items: (Education | Certification)[];
}

function metaOf(item: Education | Certification) {
  return 'institution' in item
    ? `${item.institution} · ${item.period}`
    : `${item.issuer} · ${item.year}`;
}

/** Lista enxuta de formação e certificações. */
export function CredentialList({ items }: CredentialListProps) {
  const { localize } = useLocale();

  return (
    <ul>
      {items.map((item) => (
        <CredentialItem key={`${item.title.pt}-${metaOf(item)}`}>
          <CredentialTitle>{localize(item.title)}</CredentialTitle>
          <CredentialMeta>{metaOf(item)}</CredentialMeta>
        </CredentialItem>
      ))}
    </ul>
  );
}
