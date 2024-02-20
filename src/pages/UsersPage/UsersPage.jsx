import './UsersPage.css'
import Header from '../../components/Header/Header'
import UsersTable from '../../components/UsersTable/UsersTable'
import Popup from '../../components/PopUp/PopUp'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function UsersPage() {
  const [modalActive, setModalActive] = useState(false);



  const { seed } = useSelector(state => state.root);

  return seed ? (
    <>
      <Popup active={modalActive} setActive={setModalActive} />

      <div className='users-page__container'>
        <Header setActive={setModalActive} />
        <div className="users-page__table">
          <UsersTable />
        </div>
      </div>
    </>

  ) : <Navigate to='/' />
}
export default UsersPage