import "./UsersTable.css";
import UserRow from "../UserRow/UserRow";
import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/reducers/rootSlice';

const UsersTable = () => {

  const dispatch = useDispatch();
  const { users } = useSelector(state => state.root);
  const [page, setPage] = useState(1);
  const containerRef = useRef();
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollTop + container.clientHeight >= container.scrollHeight - 20 &&
      !isFetching
    ) {
      setIsFetching(true);
    }
  }, [containerRef, isFetching]);
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);


  useEffect(() => {
    dispatch(getUsers(page));
  }, []);


  useEffect(() => {
    if (!isFetching) return;
    dispatch(getUsers(page)).then(() => {
      setPage(prevPage => prevPage + 1);
      setIsFetching(false);
    });
  }, [isFetching, page, dispatch]);


  return (
    <div className="users-table__container" >
      <table className="users-table" ref={containerRef}>
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
