import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSeed } from '../../store/reducers/rootSlice';
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
    navigate('/users', { replace: true });
  }

  return (
    <div className="login__container">
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <p className='form__title'>Добро пожаловать</p>
        <label className="form__label input__container">
          <input
            type="text"
            placeholder=' '
            className={`form__input form__input__seed ${errors.seed ? 'input__error' : ''}`}
            {...register('seed', { required: true, minLength: 2 })}
          />
          <span className="input__placeholder">Seed</span>
        </label>
        <div className="form__error">
          {errors?.seed && <span>*Поле заполнено не корректно</span>}
        </div>
        <button type="submit" className='form__button'>Войти</button>
      </form>
    </div>
  );
}

export default LoginForm;
