/**
 * Credenciais do EmailJS. Ficam em variáveis de ambiente para que o envio
 * possa ser configurado sem alterar o código — veja o `.env.example`.
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
};

/** Sem as credenciais o formulário avisa e indica o e-mail como alternativa. */
export const isEmailjsConfigured =
  emailjsConfig.serviceId !== '' &&
  emailjsConfig.templateId !== '' &&
  emailjsConfig.publicKey !== '';
