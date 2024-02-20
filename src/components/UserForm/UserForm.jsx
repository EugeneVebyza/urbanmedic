import "./UserForm.css";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';


function UserForm() {
  const dispatch = useDispatch();

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form className="user-form form" onSubmit={handleSubmit(onSubmit)}>
      <p className='form__title'>Новый пользователь</p>
      <label className="user-form__checkbox">
        <input type="checkbox" className="form__input-seed" {...register('gendre')} />
        <span className="user-form__gendre" data-label-on="Женщина" data-label-off="Мужчина"></span>
      </label>

      <label className="form__label">
        Фамилия*
        <input type="text" className="form__input-seed" {...register('lastname', { required: true, maxLength: 25, pattern: /^[А-Яа-я\-]+$/i })} />
      </label>
      <div className="form__error">
        {errors?.lastname && <span>*Поле заполнено некорректно</span>}
      </div>

      <label className="form__label">
        Имя*
        <input type="text" className="form__input-seed" {...register('firstname', { required: true, maxLength: 25, pattern: /^[А-Яа-я\-]+$/i })} />
      </label>
      <div className="form__error">
        {errors?.firstname && <span>*Поле заполнено некорректно</span>}
      </div>

      <label className="form__label">
        Email*
        <input type="text" className="form__input-seed" {...register('email', { required: true, minLength: 2, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i })} />
      </label>
      <div className="form__error">
        {errors?.email && <span>*Поле заполнено некорректно</span>}
      </div>

      <button type="submit" className='form__button'>Сохранить</button>


    </form >
  )
}

export default UserForm;