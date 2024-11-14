import axiosInstance from './axiosInstance';

export const createApply = async (data) => {
  try {
    const response = await axiosInstance.post('apply/corporate', data);
    return response.data;
  } catch (error) {
    console.error("Error creating apply:", error);
    throw error;
  }
};


export const getApplies = async (data) => {
  try {
    const response = await axiosInstance.get('apply/corporate');
    return response.data;
  } catch (error) {
    console.error("Error creating apply:", error);
    throw error;
  }
};

export const updateApplyStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(`apply/corporate/${id}/status`, status);
    return response.data;
  } catch (error) {
    console.error("Error updating apply status:", error);
    throw error;
  }
};