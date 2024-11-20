import axiosInstance from './axiosInstance';

export const createJobApplication = async (id, data) => {
  try {
    const response = await axiosInstance.post(`/vacancy/apply/${id}`, data,  {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating job application:", error);
    throw error;
  }
};

export const getApplicationsByVacancy = async (id) => {
    try {
      const response = await axiosInstance.get(`/vacancy/apply/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching job applications:", error);
      throw error;
    }
  };