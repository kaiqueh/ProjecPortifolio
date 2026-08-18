import * as S from './styles';

interface AnimatedBarProps {
  isActive: boolean;
  barCount?: number;
}

export function AnimatedBar({ isActive, barCount = 6 }: AnimatedBarProps) {
  return (
    <S.Container>
      {Array.from({ length: barCount }, (_, i) => (
        <S.Bar key={i} $index={barCount - i} $isActive={isActive} />
      ))}
    </S.Container>
  );
}
