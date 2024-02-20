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
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    dispatch(setSeed(data.seed));
    dispatch(getUsers(data.seed));
    navigate('/users', { replace: true });
  }

  return (
    <div className="login__container">
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <p className='form__title'>Добро пожаловать</p>
        <label className="form__label">
          Seed
          <input type="text" className="form__input-seed" {...register('seed', { required: true, minLength: 2 })} />
        </label>
        <div className="form__error">
          {errors?.seed && <span>*Поле заполнено некорректно</span>}
        </div>
        <button type="submit" className='form__button'>Войти</button>
      </form>
    </div>
  )
}

export default LoginForm
