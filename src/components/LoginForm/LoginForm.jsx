import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSeed, getUsers } from '../../store/reducers/rootSlice';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setSeed(data.seed));
    dispatch(getUsers(data.seed));
    navigate('/users', { replace: true });
  }

  return (
    <div className="login-container">
      <form className="login-form form" onSubmit={handleSubmit(onSubmit)}>
        <p className='form-title'>Welcome</p>
        <label className="form-label input-container">
          <input
            type="text"
            placeholder=' '
            className={`form-input form-input-seed ${errors.seed ? 'input-error' : ''}`}
            {...register('seed', { required: true, minLength: 2 })}
          />
          <span className="input-placeholder">Seed</span>
        </label>
        <div className="form-error">
          {errors?.seed && <span>*Field filled incorrectly</span>}
        </div>
        <button type="submit" className='form-button'>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
