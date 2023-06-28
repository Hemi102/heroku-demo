import * as yup from 'yup';

export const questionsSchema = yup.object().shape({
  description: yup.string().required(),
  question_type: yup.string().required(),
  question_options: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required('Required *'),
        // answer: yup.boolean().required(),
      }),
    )
    .when('question_type', {
      is: 'selected',
      then: yup.array().of(
        yup.object().shape({
          value: yup.string().required('Required *'),
          // id: yup.boolean().required()s,
        }),
      ),
    }),
  status: yup.string(),
});

export const questionsInitialValues = {
  description: '',
  question_type: '',
  question_options: [{value: ''}],
  status: 'inactive',
};
