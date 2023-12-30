import axios from 'axios';

const apiUrl = 'http://localhost:3333'; 

export const getItems = async () => {
  try {
    const response = await axios.get(`${apiUrl}/seuEndpoint`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar itens: ${error}`);
  }
};

export const createItem = async (itemData: any) => {
  try {
    const response = await axios.post(`${apiUrl}/seuEndpoint`, itemData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao criar item: ${error}`);
  }
};