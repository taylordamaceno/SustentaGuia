import axios from 'axios';

// Obtém a URL base dinamicamente baseada no hostname atual
const getBaseURL = () => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  return `${protocol}//${hostname}:3001`;
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 