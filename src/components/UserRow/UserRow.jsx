import "./UserRow.css"

function UserRow() {
  return (
    <tr className="user-row">
      <td>1</td>
      <td>Алексеев</td>
      <td>Валерий</td>
      <td>Мужской</td>
      <td>gorodgrosh@yandex.ru</td>
      <td>
        <button>Редактировать</button>
      </td>

    </tr>
  )
}

export default UserRow