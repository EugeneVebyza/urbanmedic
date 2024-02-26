import './UsersPage.css'
import Header from '../../components/Header/Header'
import UsersTable from '../../components/UsersTable/UsersTable'
import Popup from '../../components/PopUp/PopUp'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function UsersPage() {

  const { seed } = useSelector(state => state.root);

  return seed ? (
    <>
      <Popup />

      <div className='users-page__container'>
        <Header />
        <div className="users-page__table">
          <UsersTable />
        </div>
      </div>
    </>

  ) : <Navigate to='/' />
}
export default UsersPage