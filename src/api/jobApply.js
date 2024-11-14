import axiosInstance from './axiosInstance';

export const createJobApplication = async (data) => {
  try {
    console.log(data);
    const response = await axiosInstance.post('/vacancy/apply', data);
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