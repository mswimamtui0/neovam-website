import axios from 'axios';

// Use environment variable for API base
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || '/api';

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/login`, {
        username,
        password
      });

      const data = response.data;
      
      // Store token and user data
      localStorage.setItem('neovam_auth_token', data.token);
      localStorage.setItem('neovam_user', JSON.stringify(data.user));
      
      return data;
    } catch (error) {
      // In production, don't use mock data - let the error propagate
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode - using mock login');
        // Fallback for development only
        if (username === 'admin' && password === 'neovam@2024') {
          const mockData = {
            token: 'admin-token-neovam',
            user: {
              id: 1,
              username: 'admin',
              name: 'NeoVam Admin',
              email: 'admin@neovam.com',
              role: 'admin'
            }
          };
          
          localStorage.setItem('neovam_auth_token', mockData.token);
          localStorage.setItem('neovam_user', JSON.stringify(mockData.user));
          
          return mockData;
        }
      }
      
      throw new Error('Invalid credentials');
    }
  }

  logout() {
    localStorage.removeItem('neovam_auth_token');
    localStorage.removeItem('neovam_user');
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('neovam_user');
    // ✅ FIX: Check if userStr exists and is not "undefined" or "null"
    if (!userStr || userStr === 'undefined' || userStr === 'null') {
      return null;
    }
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem('neovam_auth_token');
  }

  isAdmin() {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  }

  getAuthHeader() {
    const token = localStorage.getItem('neovam_auth_token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }
}

export default new AuthService();