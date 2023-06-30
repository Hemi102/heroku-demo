import {QUESTIONS_ENDPOINT} from 'constants/endpoints';
import {deleteApi, get, post, put} from 'services/network';

export const getQuestions = async obj => {
  const params = {
    page: obj?.page ? obj.page : 1,
    perPage: obj?.perPage ? obj.perPage : 10,
    search: obj?.search ? obj.search : '',
  };
  try {
    const result = await get(
      `${QUESTIONS_ENDPOINT}?page=${params.page}&per=${params.perPage}&query=${params.search}`,
      true,
    );
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
