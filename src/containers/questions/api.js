import {QUESTIONS_ENDPOINT} from 'constants/endpoints';
import {deleteApi, get, post, put} from 'services/network';

export const getQuestions = async () => {
  try {
    const result = await get(QUESTIONS_ENDPOINT, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuestions = async (data, id) => {
  try {
    const result = await put(`${QUESTIONS_ENDPOINT}/${id}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deleteQuestion = async id => {
  try {
    const result = await deleteApi(`${QUESTIONS_ENDPOINT}/${id}`, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const createQuestion = async data => {
  try {
    const result = await post(`${QUESTIONS_ENDPOINT}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
