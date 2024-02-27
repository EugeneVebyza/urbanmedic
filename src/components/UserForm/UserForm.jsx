import "./UserForm.css";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addUser, removeUser, closeModal, updateUser } from '../../store/reducers/rootSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function UserForm({ user }) {
  const dispatch = useDispatch();
  const { register, formState: { errors, isValid }, handleSubmit, setValue, reset } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (user) {
      setValue('firstname', user.firstname);
      setValue('lastname', user.lastname);
      setValue('email', user.email);
      setValue('gender', user.gender == 'female' ? "checked" : "");
    }
  }, [setValue, user]);

  const onSubmit = (data) => {
    if (!user) {
      dispatch(addUser(data));
    }
    else {
      dispatch(updateUser({ id: user.id, ...data }));
    }
    dispatch(closeModal());
    reset();

  };

  const onRemove = (id) => {

    dispatch(removeUser(id));
    dispatch(closeModal());
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
          {...register('lastname', { required: true, maxLength: 25, pattern: /^[А-Яа-я-]+$/i })}
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
          {...register('firstname', { required: true, maxLength: 25, pattern: /^[А-Яа-я-]+$/i })}
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
      <div className="form__controls">
        {user && <button type="button" className='form__remove-button' onClick={() => onRemove(user.id)}><img src="/bin.svg" alt="" /></button>}
        <button type="submit" className='form__button' disabled={!isValid}>Сохранить</button>
      </div>
    </form>
  );
}

UserForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string
  })
};


export default UserForm;