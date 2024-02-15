import './UsersPage.css'
import Header from '../../components/Header/Header'
import UsersTable from '../../components/UsersTable/UsersTable'

function Users() {
  return (
    <div className='users-page__container'>
      <Header />
      <div className="users-page__table">
        <UsersTable />
      </div>
    </div>
  )
}
export default Users