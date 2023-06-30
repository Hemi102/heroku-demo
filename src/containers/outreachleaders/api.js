import {OUTREACH_LEADERS} from 'constants/endpoints';
import {result} from 'lodash';
import {deleteApi, get, post, put} from 'services/network';

export const getOutreachLeaders = async obj => {
  const params = {
    page: obj?.page ? obj.page : 1,
    perPage: obj?.perPage ? obj.perPage : 10,
    search: obj?.search ? obj.search : '',
  };
  try {
    const result = await get(
      `${OUTREACH_LEADERS}?page=${params.page}&per=${params.perPage}&query=${params.search}`,
      true,
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const createOutreachLeader = async data => {
  try {
    const result = await post(`${OUTREACH_LEADERS}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const updateOutreachLeader = async (data, id) => {
  try {
    const result = await put(`${OUTREACH_LEADERS}/${id}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deleteOutreachLeader = async id => {
  try {
    const result = await deleteApi(`${OUTREACH_LEADERS}/${id}`);
    return result;
  } catch (error) {
    console.log(result);
  }
};
