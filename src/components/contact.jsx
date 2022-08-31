import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import uploadIcon from '../images/upload.svg';
import classname from '../utils/classname';
import { postContact } from '../utils/rest';

const schema = yup.object({
  email: yup.string().email('Email is invalid').required('Email is required'),
  message: yup
    .string()
    .trim()
    .min(8, 'Message is too short')
    .max(255, 'Message is too long')
    .required('Message is required'),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit({ email, message }) {
    await toast.promise(postContact({ email, message }), {
      pending: 'Submitting',
      success: 'Success',
      error: 'Error',
    });
  }

  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label
          htmlFor="email"
          className={classname('form__label', errors.email && 'form__label--error')}
        >
          Your email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={classname('form__input', errors.email && 'form__input--error')}
        />
        <p className="form__error-text">{errors.email?.message}</p>
        <label
          htmlFor="message"
          className={classname('form__label', errors.message && 'form__label--error')}
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={10}
          {...register('message')}
          className={classname('form__input', errors.message && 'form__input--error')}
        />
        <p className="form__error-text">{errors.message?.message}</p>
        <button className="submit-button">
          <img src={uploadIcon} alt="icon" />
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
