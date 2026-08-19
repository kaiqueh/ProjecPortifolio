import emailjs from '@emailjs/browser';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { emailjsConfig, isEmailjsConfigured } from '../../../config/emailjs';
import { Button } from '../../ui/Button';
import { Feedback, Field, FieldError, Form, Input, Label, TextArea } from './styles';

type FieldName = 'name' | 'email' | 'subject' | 'message';
type Status = 'idle' | 'sending' | 'success' | 'error' | 'unavailable';

const EMPTY_VALUES: Record<FieldName, string> = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulário de contato. Valida os campos obrigatórios no cliente e envia
 * pelo EmailJS, dispensando um backend próprio. Sem credenciais
 * configuradas, orienta o visitante a usar o e-mail profissional.
 */
export function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const found: Partial<Record<FieldName, string>> = {};

    for (const field of Object.keys(EMPTY_VALUES) as FieldName[]) {
      if (values[field].trim() === '') found[field] = t('contact.form.required');
    }

    if (!found.email && !EMAIL_PATTERN.test(values.email.trim())) {
      found.email = t('contact.form.invalidEmail');
    }

    setErrors(found);
    return Object.keys(found).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    if (!isEmailjsConfigured) {
      setStatus('unavailable');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: values.name,
          reply_to: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: emailjsConfig.publicKey },
      );

      setValues(EMPTY_VALUES);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const isSending = status === 'sending';

  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate aria-label={t('contact.form.title')}>
        <Field>
          <Label htmlFor="contato-nome">{t('contact.form.name')} *</Label>
          <Input
            id="contato-nome"
            name="name"
            autoComplete="name"
            placeholder={t('contact.form.namePlaceholder')}
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'erro-nome' : undefined}
            $invalid={Boolean(errors.name)}
          />
          {errors.name && <FieldError id="erro-nome">↳ {errors.name}</FieldError>}
        </Field>

        <Field>
          <Label htmlFor="contato-email">{t('contact.form.email')} *</Label>
          <Input
            id="contato-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t('contact.form.emailPlaceholder')}
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'erro-email' : undefined}
            $invalid={Boolean(errors.email)}
          />
          {errors.email && <FieldError id="erro-email">↳ {errors.email}</FieldError>}
        </Field>

        <Field>
          <Label htmlFor="contato-assunto">{t('contact.form.subject')} *</Label>
          <Input
            id="contato-assunto"
            name="subject"
            placeholder={t('contact.form.subjectPlaceholder')}
            value={values.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'erro-assunto' : undefined}
            $invalid={Boolean(errors.subject)}
          />
          {errors.subject && <FieldError id="erro-assunto">↳ {errors.subject}</FieldError>}
        </Field>

        <Field>
          <Label htmlFor="contato-mensagem">{t('contact.form.message')} *</Label>
          <TextArea
            id="contato-mensagem"
            name="message"
            rows={5}
            placeholder={t('contact.form.messagePlaceholder')}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'erro-mensagem' : undefined}
            $invalid={Boolean(errors.message)}
          />
          {errors.message && <FieldError id="erro-mensagem">↳ {errors.message}</FieldError>}
        </Field>

        <Button type="submit" fullWidth disabled={isSending}>
          {isSending ? t('contact.form.sending') : t('contact.form.send')}
        </Button>
      </Form>

      {status === 'success' && (
        <Feedback role="status" $tone="success">
          {t('contact.form.success')}
        </Feedback>
      )}

      {status === 'error' && (
        <Feedback role="alert" $tone="error">
          {t('contact.form.error')}
        </Feedback>
      )}

      {status === 'unavailable' && (
        <Feedback role="alert" $tone="error">
          {t('contact.form.notConfigured')}
        </Feedback>
      )}
    </div>
  );
}
