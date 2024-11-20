import axiosInstance from './axiosInstance';

export const createData = async (data) => {
  try {
    const response = await axiosInstance.post('/home', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await axiosInstance.get(`/home`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDataById = async (id) => {
  try {
    const response = await axiosInstance.get(`/home/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/home/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};


// FOR CORPORATE
export const createDataForCor = async (data) => {
  try {
    const response = await axiosInstance.post('/corporate/home', data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

export const getDataForCo = async () => {
  try {
    const response = await axiosInstance.get(`/corporate/home`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDataForCoById = async (id) => {
  try {
    const response = await axiosInstance.get(`/corporate/home/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


export const updateDataForCo = async (id, data) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axiosInstance.patch(`/corporate/home/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      })
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
