import "./Header.css"


function Header() {
  return (
    <div className="header">
      <p className="header__title">Указать ФИО</p>
      <div className="header__toolbar toolbar">
        <button className="toolbar__add-user">Добавить пользователя</button>
        <button className="toolbar__logout">Выйти</button>
      </div>
    </div>
  )
}

export default Header