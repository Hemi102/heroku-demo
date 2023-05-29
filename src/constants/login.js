import * as yup from 'yup';

const emailValidation = {
  email: yup.string().email('Must be a valid email').max(255).required('Email is required *'),
};

export const validationSchema = yup.object().shape({
  ...emailValidation,
  password: yup.string().required('Password is required *'),
});

export const forgotPasswordSchema = yup.object().shape({
  ...emailValidation,
});

export const resetPasswordSchema = yup.object().shape({
  // ...emailValidation,
  password: yup.string().required('New Password is required *'),
  password_confirmation: yup.string().required('Confirm Password is required *'),
});
