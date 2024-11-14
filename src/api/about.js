import axiosInstance from './axiosInstance';

export const createAbout = async (data) => {
  try {
    const response = await axiosInstance.post('/about', data);
    return response.data;
  } catch (error) {
    console.error("Error creating about:", error);
    throw error;
  }
};

export const getAbout = async (userId) => {
  try {
    const response = await axiosInstance.get(`/about`);
    return response.data;
  } catch (error) {
    console.error("Error fetching about:", error);
    throw error;
  }
};


export const updateAbout = async (data) => {
  try {
    const response = await axiosInstance.patch(`/about`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating about:", error);
    throw error;
  }
};