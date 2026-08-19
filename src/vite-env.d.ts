/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Identificadores do EmailJS usados pelo formulário de contato. */
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
