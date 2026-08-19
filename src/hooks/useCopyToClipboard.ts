import { useCallback, useEffect, useState } from 'react';

/** Copia um texto e sinaliza o sucesso por um curto período. */
export function useCopyToClipboard(resetDelay = 1600) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, []);

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => setCopied(false), resetDelay);
    return () => clearTimeout(timeout);
  }, [copied, resetDelay]);

  return { copied, copy };
}
