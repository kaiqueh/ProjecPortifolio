import { useTypeWriter } from '../../../hooks/useTypeWriter';
import * as S from './styles';

interface TypeWriterProps {
  words: string[];
}

export function TypeWriter({ words }: TypeWriterProps) {
  const { currentText } = useTypeWriter({ words });

  return <S.Container>{currentText}</S.Container>;
}
