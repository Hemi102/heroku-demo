import * as yup from 'yup';

export const careManagerSchema = yup.object().shape({
  name: yup.string().required(),
  care_coordinator_name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  location: yup.string().required(),
  capacity: yup
    .number()
    .required()
    .positive()
    .integer(),
});

export const careManagerInitialValues = {
  name: '',
  care_coordinator_name: '',
  email: '',
  location: '',
  capacity: '',
};
