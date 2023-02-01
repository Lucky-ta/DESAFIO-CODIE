import * as Yup from 'yup';

export const schema = Yup.object().shape({
  url: Yup.string().url().required(),
  name: Yup.string().min(3).required(),
  file: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});