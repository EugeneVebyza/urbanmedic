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
            <th>Last Name</th>
            <th>First Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
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
