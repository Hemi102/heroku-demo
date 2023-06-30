import * as yup from 'yup';
export const outreahLoaderSchema = yup.object().shape({
  full_name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  username: yup.string().required(),
  password: yup.string().required(),
  location: yup.string().required(),
});
export const outreachLeaderInitialValues = {
  full_name: '',
  email: '',
  username: '',
  password: '',
  location: '',
};
