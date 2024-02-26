import "./UsersTable.css";
import UserRow from "../UserRow/UserRow";
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/reducers/rootSlice';

const UsersTable = () => {

  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.root);
  const [page, setPage] = useState(1);
  const containerRef = useRef();
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollTop + container.clientHeight >= container.scrollHeight - 20 &&
      !isFetching
    ) {
      setIsFetching(true);
    }
  };
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);


  useEffect(() => {
    dispatch(getUsers(page)); // выполняем запрос при загрузке компонента
  }, []); // пустой массив зависимостей для выполнения один раз после перезагрузки


  useEffect(() => {
    if (!isFetching) return;
    dispatch(getUsers(page)).then(() => {
      setPage(prevPage => prevPage + 1);
      setIsFetching(false);
    });
  }, [isFetching]);




  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="users-table__container" ref={containerRef}>
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
          {
            users.map((user, index) => (
              <UserRow
                user={user}
                index={index + 1}
                key={index + 1}
                isLast={index === users.length - 1 ? true : false}
              />
            ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
