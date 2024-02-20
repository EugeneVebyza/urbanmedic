import PropTypes from 'prop-types';
import "./UserRow.css"

function UserRow({ user }) {
  return (
    <tr className="user-row">
      <td>{user.id}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>
        <button>Редактировать</button>
      </td>

    </tr>
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserRow