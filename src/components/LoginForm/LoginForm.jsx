import { useForm } from 'react-hook-form'
import './LoginForm.css'
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/reducers/rootSlice';


function LoginForm() {

  const dispatch = useDispatch();

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    dispatch(getUsers(data.seed));
  }
  //По доке сид - любая последовательность символов, валидация только по required

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
