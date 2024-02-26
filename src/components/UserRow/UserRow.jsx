import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/reducers/rootSlice';

import "./UserRow.css";

function UserRow({ user, index, isLast }) {

  const dispatch = useDispatch();

  return (
    <tr className="user-row" id={isLast ? 'lastRow' : ''}>
      <td>{index}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>
        <button className={user.fetched ? 'user__edit-disabled' : ''} onClick={() => dispatch(openModal(user))}>Редактировать</button>
      </td>

    </tr>
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool
};

export default UserRow;