import {MEMBERS} from 'constants/endpoints';
import {result} from 'lodash';
import {deleteApi, get, post, put} from 'services/network';

export const getMembers = async obj => {
  const params = {
    page: obj?.page ? obj.page : 1,
    perPage: obj?.perPage ? obj.perPage : 10,
    search: obj?.search ? obj.search : '',
  };
  try {
    const result = await get(`${MEMBERS}?page=${params.page}&per=${params.perPage}&query=${params.search}`, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const createMember = async data => {
  try {
    const result = await post(`${MEMBERS}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const updateMember = async (data, id) => {
  try {
    const result = await put(`${MEMBERS}/${id}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMember = async id => {
  try {
    const result = await deleteApi(`${MEMBERS}/${id}`);
    return result;
  } catch (error) {
    console.log(result);
  }
};
