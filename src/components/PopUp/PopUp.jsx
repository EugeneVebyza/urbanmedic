import './PopUp.css';
import PropTypes from 'prop-types';
import UserForm from '../UserForm/UserForm';

function PopUp({ active, setActive }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img className="modal__cross" onClick={() => setActive(false)} src="/popup__cross.svg" alt="" />
        <UserForm />
      </div>
    </div>
  );
}
PopUp.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default PopUp;
