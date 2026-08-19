import { StyledStatusDot } from './styles';

interface StatusDotProps {
  size?: string;
  glow?: boolean;
}

/**
 * Indicador pulsante de status. O texto que o acompanha é sempre o que
 * comunica a informação — a cor sozinha nunca carrega significado.
 */
export function StatusDot({ size = '7px', glow = true }: StatusDotProps) {
  return <StyledStatusDot aria-hidden="true" $size={size} $glow={glow} />;
}
