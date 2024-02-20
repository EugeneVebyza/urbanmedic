import { useDispatch } from 'react-redux';
import { removeSeed } from '../../store/reducers/rootSlice';
import PropTypes from 'prop-types';

import "./Header.css"

function Header({ setActive }) {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <p className="header__title">Указать ФИО</p>
      <div className="header__toolbar toolbar">
        <button className="toolbar__add-user" onClick={() => setActive(true)}>Добавить пользователя</button>
        <button className="toolbar__logout" onClick={() => dispatch(removeSeed())} >Выйти</button>
      </div>
    </div>
  )
}

Header.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default Header