import axiosInstance from './axiosInstance';

export const createCourse = async (data) => {
    try {
        const response = await axiosInstance.post(`/course`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        })
        return response.data;
      } catch (error) {
        console.error("Error creating course:", error);
        throw error;
      }
};


export const getCourses = async () => {
  try {
    const response = await axiosInstance.get(`/course`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axiosInstance.get(`/course/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course by id:", error);
    throw error;
  }
};


export const deleteCourse = async (id) => {
    try {
      const response = await axiosInstance.delete(`/course/${id}`);
      return response.data; 
    } catch (error) {
      console.error("Delete course error:", error);
      throw error;
    }
};