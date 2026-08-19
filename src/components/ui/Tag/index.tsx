import { StyledTag, TagIcon, TagIconPlaceholder } from './styles';
import type { TagSize } from './styles';

interface TagProps {
  label: string;
  /** Ícone opcional da tecnologia. */
  icon?: string;
  /** Exibe o espaço do ícone mesmo sem imagem, mantendo o alinhamento. */
  showIconSlot?: boolean;
  size?: TagSize;
}

/** Chip de tecnologia. Deve ser usado dentro de uma lista. */
export function Tag({ label, icon, showIconSlot = false, size = 'md' }: TagProps) {
  return (
    <StyledTag $size={size}>
      {icon ? <TagIcon src={icon} alt="" aria-hidden="true" /> : null}
      {!icon && showIconSlot ? <TagIconPlaceholder aria-hidden="true" /> : null}
      {label}
    </StyledTag>
  );
}
