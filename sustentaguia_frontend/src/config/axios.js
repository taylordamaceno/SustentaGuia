import axios from 'axios';

// Obtém a URL base dinamicamente baseada no hostname atual
const getBaseURL = () => {
  // Verifica se há uma variável de ambiente definida
  if (process.env.REACT_APP_API_URL || process.env.NEXT_PUBLIC_API_URL) {
    return process.env.REACT_APP_API_URL || process.env.NEXT_PUBLIC_API_URL;
  }
  
  // Caso contrário, usa o hostname atual
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  
  // Retorna a URL com o hostname atual para funcionar tanto em localhost quanto em rede local
  return `${protocol}//${hostname}:3001`;
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 