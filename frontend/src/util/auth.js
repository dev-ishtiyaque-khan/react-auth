import { redirect } from "react-router-dom";

const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

const getAuthToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED'
  }

  return token;
}

const tokenLoader = () => {
  return getAuthToken()
}

const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth');
  }

  return null;
}

export { getAuthToken, tokenLoader, checkAuthLoader, getTokenDuration }