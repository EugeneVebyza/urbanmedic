import "./UsersTable.css";
import UserRow from "../UserRow/UserRow";
import { useSelector } from 'react-redux';

const UsersTable = () => {
  const { users } = useSelector(state => state.root);

  return (
    <div className="users-table__container">
      <table className="users-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Пол</th>
            <th>Почта</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow user={{ ...user, id: index + 1 }} key={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
