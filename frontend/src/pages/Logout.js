import { redirect } from "react-router-dom";

const action = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration')
  return redirect('/')
}

export { action }