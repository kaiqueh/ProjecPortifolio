import { StyledGlow } from './styles';
import type { GlowIntensity } from './styles';

interface GlowBackdropProps {
  intensity?: GlowIntensity;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  /** Duração do movimento; valores altos deixam o halo quase estático. */
  duration?: string;
}

/**
 * Halo de luz difuso posicionado no fundo das seções.
 * É puramente decorativo, então fica fora da árvore de acessibilidade.
 */
export function GlowBackdrop({
  intensity = 'medium',
  top,
  right,
  bottom,
  left,
  width = '52%',
  height = '70%',
  duration = '21s',
}: GlowBackdropProps) {
  return (
    <StyledGlow
      aria-hidden="true"
      $intensity={intensity}
      $top={top}
      $right={right}
      $bottom={bottom}
      $left={left}
      $width={width}
      $height={height}
      $duration={duration}
    />
  );
}
