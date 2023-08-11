import axios from 'api/axios';
import { authUpdateUser } from 'store/auth/auth-slice';
import { getToken, saveToken } from 'utils/auth';

export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    if (!refresh_token) return null;
    const response = await axios.post('/token', {
      'Content-Type': 'Application/json',
      refreshToken: refresh_token,
    });
    if (!response.data) return null;
    saveToken(response.data.accsessToken, response.data.refreshToken);
    authUpdateUser((prev) => ({
      ...prev,
      accsessToken: response.data.accsessToken,
    }));

    return response?.data?.accsessToken || '';
  }

  return refresh;
}
