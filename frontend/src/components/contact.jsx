import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Toast from '../components/toast';
import useFetch from '../hooks/useFetch';
import classname from '../utils/classname';

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
  const { post, reset, isLoading, error, data } = useFetch();

  async function onSubmit(payload) {
    await post('/contact', payload);
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
        <button disabled={isLoading} className="submit-button">
          Submit
        </button>
      </form>

      {error ? <Toast type="error" message={error.message} onTimeout={reset} /> : null}
      {data ? <Toast type="success" message="Submit successfully" onTimeout={reset} /> : null}
    </section>
  );
}

export default Contact;
