import * as yup from 'yup';
export const memberSchema = yup.object().shape({
  name: yup.string().required(),
  date_of_birth: yup.string(),
  city: yup.string().required(),
  cin: yup.string().required(),
  mif: yup.string().required(),
  account_number: yup.string().required(),
  mif_status: yup.string().required(),
  enrollment_status: yup.string().required(),
});

export const memberInitialValues = {
  name: '',
  date_of_birth: '',
  city: '',
  cin: '',
  mif: '',
  account_number: '',
  mif_status: '',
  enrollment_status: '',
};
