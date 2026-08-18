import { useRef } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import * as S from './styles';

// Configure these with your EmailJS credentials
// Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      // TODO: Add success feedback (toast, modal, etc.)
      formRef.current.reset();
    } catch {
      // TODO: Add error feedback
      console.error('Failed to send email');
    }
  };

  return (
    <S.Form ref={formRef} onSubmit={handleSubmit}>
      <S.Heading>
        {t('contact.formHeading')} <span>{t('contact.formHeadingHighlight')}</span>
      </S.Heading>
      <S.FieldBox>
        <S.Input type="text" name="user_name" placeholder={t('contact.form.name')} required />
        <S.Input type="email" name="user_email" placeholder={t('contact.form.email')} required />
        <S.Input type="text" name="user_phone" placeholder={t('contact.form.phone')} required />
        <S.Input type="text" name="subject" placeholder={t('contact.form.subject')} required />
        <S.TextArea name="message" placeholder={t('contact.form.message')} />
      </S.FieldBox>
      <S.SubmitButton type="submit">{t('contact.form.send')}</S.SubmitButton>
    </S.Form>
  );
}
