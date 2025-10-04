// Simple API configuration without environment variables
export const getApiUrl = () => {
  // Check current domain to determine API URL
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  const port = window.location.port;
  
  console.log('🔗 Frontend Debug:', { hostname, protocol, port });
  
  // Development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const devUrl = 'http://localhost:5000/api';
    console.log('🔗 Using development API URL:', devUrl);
    return devUrl;
  }
  
  // Production - your deployed backend
  const prodUrl = 'https://odooxiitg-1.onrender.com/api';
  console.log('🔗 Using production API URL:', prodUrl);
  return prodUrl;
};

export const API_BASE_URL = getApiUrl();

// Log the final API URL
console.log('🔗 Final API Base URL:', API_BASE_URL);
