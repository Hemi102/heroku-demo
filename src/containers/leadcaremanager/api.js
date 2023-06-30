import {LEAD_CARE_MANAGER} from 'constants/endpoints';
import {result} from 'lodash';
import {deleteApi, get, post, put} from 'services/network';

export const getLeadCareManagers = async obj => {
  const params = {
    page: obj?.page ? obj.page : 1,
    perPage: obj?.perPage ? obj.perPage : 10,
    search: obj?.search ? obj.search : '',
  };
  try {
    const result = await get(
      `${LEAD_CARE_MANAGER}?page=${params.page}&per=${params.perPage}&query=${params.search}`,
      true,
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const createLeadCareManager = async data => {
  try {
    const result = await post(`${LEAD_CARE_MANAGER}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const updateLeadCareManager = async (data, id) => {
  try {
    const result = await put(`${LEAD_CARE_MANAGER}/${id}`, data, true);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deleteLeadCareManager = async id => {
  try {
    const result = await deleteApi(`${LEAD_CARE_MANAGER}/${id}`);
    return result;
  } catch (error) {
    console.log(result);
  }
};
