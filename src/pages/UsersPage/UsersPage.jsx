import './UsersPage.css'
import Header from '../../components/Header/Header'
import UsersTable from '../../components/UsersTable/UsersTable'
import Popup from '../../components/PopUp/PopUp'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function UsersPage() {
  const [showPopup, setShowPopup] = useState(false);

  const { seed } = useSelector(state => state.root);

  return seed ? (
    <>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <div className='users-page__container'>
        <Header setShowPopup={() => setShowPopup(true)} />
        <div className="users-page__table">
          <UsersTable />
        </div>
      </div>
    </>

  ) : <Navigate to='/' />
}
export default UsersPage