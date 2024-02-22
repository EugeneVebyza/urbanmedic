import "./UserForm.css";
import { useForm } from 'react-hook-form';


function UserForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="user-form form" onSubmit={handleSubmit(onSubmit)}>
      <p className='form__title'>Новый пользователь</p>
      <label className="user-form__checkbox">
        <input type="checkbox" className="form__input-gender" {...register('gender')} />
        <span className="user-form__gender" data-label-on="Женщина" data-label-off="Мужчина"></span>
      </label>

      <label className="form__label input__container">
        <input
          type="text"
          className={`form__input form__input-lastname ${errors.lastname ? 'input-error' : ''}`}
          placeholder=" "
          {...register('lastname', { required: true, maxLength: 25, pattern: /^[А-Яа-я\-]+$/i })}
        />
        <span className="input__placeholder">Фамилия*</span>
      </label>
      <div className="form__error">
        {errors?.lastname && <span>*Поле заполнено некорректно</span>}
      </div>

      <label className="form__label input__container">
        <input
          type="text"
          className={`form__input form__input-firstname ${errors.firstname ? 'input-error' : ''}`}
          placeholder=" "
          {...register('firstname', { required: true, maxLength: 25, pattern: /^[А-Яа-я\-]+$/i })}
        />
        <span className="input__placeholder">Имя*</span>
      </label>
      <div className="form__error">
        {errors?.firstname && <span>*Поле заполнено некорректно</span>}
      </div>

      <label className="form__label input__container">
        <input
          type="text"
          className={`form__input form__input-email ${errors.email ? 'input-error' : ''}`}
          placeholder=" "
          {...register('email', { required: true, minLength: 2, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i })}
        />
        <span className="input__placeholder">Email*</span>
      </label>
      <div className="form__error">
        {errors?.email && <span>*Поле заполнено некорректно</span>}
      </div>

      <button type="submit" className='form__button'>Сохранить</button>
    </form>
  );
}

export default UserForm;