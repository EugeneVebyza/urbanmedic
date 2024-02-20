import { useDispatch } from 'react-redux';
import { removeSeed } from '../../store/reducers/rootSlice';
import "./Header.css"

function Header({ setShowPopup }) {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <p className="header__title">Указать ФИО</p>
      <div className="header__toolbar toolbar">
        <button className="toolbar__add-user" onClick={() => setShowPopup(true)}>Добавить пользователя</button>
        <button className="toolbar__logout" onClick={() => dispatch(removeSeed())} >Выйти</button>
      </div>
    </div>
  )
}

export default Header