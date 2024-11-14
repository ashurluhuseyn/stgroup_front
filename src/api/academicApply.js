import axiosInstance from './axiosInstance';

export const createApply = async (data) => {
  try {
    const response = await axiosInstance.post('apply/academic', data, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error creating apply:", error);
    throw error;
  }
};


export const getApplies = async (data) => {
  try {
    const response = await axiosInstance.get('apply/academic');
    return response.data;
  } catch (error) {
    console.error("Error creating apply:", error);
    throw error;
  }
};

export const updateApplyStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(`apply/academic/${id}/status`, status, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error updating apply status:", error);
    throw error;
  }
};