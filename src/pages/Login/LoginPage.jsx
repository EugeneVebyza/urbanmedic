import LoginForm from "../../components/LoginForm/LoginForm"
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./LoginPage.css"
function LoginPage() {
  const { seed } = useSelector(state => state.root);

  return !seed ? (
    <div className="login">
      <LoginForm />
    </div>
  ) : <Navigate to='/users' />
}

export default LoginPage